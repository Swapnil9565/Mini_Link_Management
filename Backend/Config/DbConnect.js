const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
const ConnectDB=async()=>{
   mongoose
   .connect(process.env.MONGO_URL, {
       useNewUrlParser: true,
       useUnifiedTopology: true,
   })
   .then(() => console.log("✅ MongoDB Connected Successfully"))
   .catch((err) => {
       console.error("❌ MongoDB Connection Error:", err);
       process.exit(1); // Stop server if connection fails
   });
}

module.exports=ConnectDB;

