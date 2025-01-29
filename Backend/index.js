const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors");
const ConnectDB = require("./Config/DbConnect");
dotenv.config();

const app=express();
const userRoute=require("./Routes/authRoute");
const urlRoute=require("./Routes/urlRoute");


const corsOptions={
    origin:process.env.Frontend_URL,
    methods:["GET","POST","PATCH","PUT","DELETE"],
    allowHeaders:["Content-Type","Authorization"]
}
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors(corsOptions));

app.use("/api/user",userRoute);
app.use("/api/url",urlRoute);

const PORT=process.env.PORT || 5000;
ConnectDB();
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})