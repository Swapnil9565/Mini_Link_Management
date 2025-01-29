const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const ConnectDB = async () => {
    try {
        const dbUri = process.env.MONGO_URL;
        if (!dbUri) {
            throw new Error("MongoDB URI (MONGO_URL) is not defined in environment variables.");
        }
        await mongoose.connect(dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,  
        });
        console.log("✅ MongoDB Connected Successfully");
    } catch (err) {
        console.error("❌ MongoDB Connection Error:", err);
        throw err;
    }

    mongoose.connection.on("disconnected", () => {
        console.warn("⚠️ MongoDB Disconnected. Reconnecting...");
      
        setTimeout(() => ConnectDB(), 5000);  
    });

    mongoose.connection.on("error", (err) => {
        console.error("❌ MongoDB Connection Error:", err);
    });
};

module.exports = ConnectDB;
