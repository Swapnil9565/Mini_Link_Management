const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

let isConnected = false;

const ConnectDB = async () => {
    const dbUri = process.env.MONGO_URL;

    console.log("MONGODB_URL:", dbUri);

    if (!dbUri) {
        console.error("❌ MONGO_URL is missing in .env file");
        return;
    }

    if (isConnected) {
        console.log("✅ Already connected to MongoDB");
        return;
    }

    try {
        await mongoose.connect(dbUri, { serverSelectionTimeoutMS: 5000 });

        isConnected = true;
        console.log("✅ Database Connected");
    } catch (err) {
        console.error("❌ Database Connection Failed:", err);
        
        // Retry only if it's a network issue
        if (err.name === "MongoNetworkError") {
            console.log("🔄 Retrying connection in 5 seconds...");
            setTimeout(ConnectDB, 5000);
        }
    }
};

// Handle MongoDB disconnections
mongoose.connection.on("disconnected", () => {
    console.warn("⚠️ MongoDB Disconnected. Attempting Reconnect...");
    isConnected = false;
    setTimeout(ConnectDB, 5000);
});

// Listen for only the first error to avoid log spam
mongoose.connection.once("error", (err) => {
    console.error("❌ Initial MongoDB Connection Error:", err);
});

module.exports = ConnectDB;
