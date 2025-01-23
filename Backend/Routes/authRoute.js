const express=require("express");
const bcrypt=require("bcryptjs");
const router=express.Router();
const userModel=require("../Models/userModel")
router.get("/",(req,res)=>{
    res.send("Hello");
})

router.post("/signUp",async(req,res)=>{
    const {name,email,mobile,password,confirm_password}=req.body;
    try {
         const isUserExist=await userModel.findOne({email});
       if(!isUserExist){
        const genSalt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, genSalt);

        if(password!=confirm_password){
           return res.status(401).json({message:"Password do not match"});
        }
        const user=await userModel.create({
           name,
           email,
           mobile,
           password:hashPassword
        })
        return res.status(200).json({message:"User registered Successfully",user})
       }

       res.status(401).json({message:"User already exist"});
       
    } catch (error) {
      console.log(error);
       return  res.status(500).json({message:"Internal Server error"})
        
    }
})

router.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try {
        const user=await userModel.findOne({email});
        if(!user){
            return res.status(401).json({message:"Invalid email or password"});
        }
        const isPasswordMatch=await bcrypt.compare(password,user.password);

        if(isPasswordMatch){
            return res.status(200).json({message:"Login successfully"});
        }
        return res.status(401).json({message:"Invalid email or password"});
        
    } catch (error) {
        console.log(error);
       return  res.status(500).json({message:"Internal Server error"})
    }
})

module.exports=router;
