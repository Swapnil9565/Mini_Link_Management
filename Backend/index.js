const express=require("express");
const dotenv=require("dotenv");
const ConnectDB = require("./Config/DbConnect");
dotenv.config();

const app=express();

const userRoute=require("./Routes/authRoute");

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/api/user",userRoute);

const PORT=process.env.PORT || 3000;
ConnectDB();
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})