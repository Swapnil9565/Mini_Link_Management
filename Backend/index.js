const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const ConnectDB = require("./Config/DbConnect");
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

// Connect to MongoDB
ConnectDB()
    .then(() => console.log("✅ Database Connected"))
    .catch(err => {
        console.error("❌ Database Connection Failed:", err);
        process.exit(1);
    });

// Export as a serverless function using serverless-http
module.exports.handler = serverless(app);
