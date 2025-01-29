const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const serverless = require("serverless-http");

dotenv.config();

const app = express();
const userRoute = require("./Routes/authRoute");
const urlRoute = require("./Routes/urlRoute");

// CORS Configuration
const allowedOrigins = process.env.Frontend_URL ? process.env.Frontend_URL.split(",") : [];
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// Routes
app.use("/api/user", userRoute);
app.use("/api/url", urlRoute);

// Root Endpoint
app.get("/", (req, res) => {
    res.send("Welcome to the Mini Link Management System");
});

const ConnectDB = async () => {
    try {
        const dbUri = process.env.MONGODB_URI;
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
        };
        await mongoose.connect(dbUri, options);
        console.log("✅ Database Connected");
    } catch (err) {
        console.error("❌ Database Connection Failed:", err);
        throw err; 
    }
};

// Connect to the DB
ConnectDB().catch((err) => {
    
    process.exit(1);  
});

// Export the app as a serverless function
module.exports = serverless(app);
