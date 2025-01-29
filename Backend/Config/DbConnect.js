const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("✅ MongoDB Connected Successfully");
    } catch (err) {
        console.error("❌ MongoDB Connection Error:", err);
        process.exit(1); 
    }
    mongoose.connection.on("disconnected", () => {
        console.warn("⚠️ MongoDB Disconnected. Reconnecting...");
        ConnectDB();
    });

    mongoose.connection.on("error", (err) => {
        console.error("❌ MongoDB Connection Error:", err);
    });
};

module.exports = ConnectDB;
