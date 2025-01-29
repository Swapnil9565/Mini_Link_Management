const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const ConnectDB = require("./Config/DbConnect");

dotenv.config();

const app = express();
const userRoute = require("./Routes/authRoute");
const urlRoute = require("./Routes/urlRoute");

// ✅ Convert allowed origins to an array
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

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// ✅ Routes
app.use("/api/user", userRoute);
app.use("/api/url", urlRoute);

// ✅ Root Endpoint
app.get("/", (req, res) => {
    res.send("Welcome to the Mini Link Management System");
});

// ✅ Connect to Database before starting the server
const PORT = process.env.PORT || 5000;

ConnectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`🚀 Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("❌ Server startup failed due to database connection error.");
    });
