const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

let isConnected = false;

const ConnectDB = async () => {
    const dbUri = process.env.MONGO_URL;  
    console.log("MONGODB_URL:", dbUri); 

    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000, 
    };

    if (isConnected) {
        console.log("✅ Already connected to MongoDB");
        return;
    }

    try {
        await mongoose.connect(dbUri, options);
        isConnected = true;  
        console.log("✅ Database Connected");
    } catch (err) {
        console.error("❌ Database Connection Failed:", err);
        setTimeout(() => ConnectDB(), 5000);  // Retry after 5 seconds
    }
};

mongoose.connection.on("disconnected", () => {
    console.warn("⚠️ MongoDB Disconnected. Reconnecting...");
    setTimeout(() => ConnectDB(), 5000);
});

mongoose.connection.on("error", (err) => {
    console.error("❌ MongoDB Connection Error:", err);
});

module.exports = ConnectDB;
