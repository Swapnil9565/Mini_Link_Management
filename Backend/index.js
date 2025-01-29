const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const serverless = require("serverless-http");
const ConnectDB = require("./Config/DbConnect");  // Importing the DB connection logic

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

// Connect to MongoDB
ConnectDB().catch((err) => {
    process.exit(1);  
});

// Export the app as a serverless function
module.exports = serverless(app);
