const express=require("express");
const router = express.Router();
const {nanoid}=require("nanoid");
const urlModel=require("../Models/URLModel");
router.post("/shortenUrl",async (req,res)=>{
    const {destinationUrl,remarks,expirationDate,shortUrl}=req.body;
    if(!destinationUrl){
        return res.status(400).json({message:"Url is required"});
    }
    const id=nanoid(8);
    const shortenUrl=`https://mini-link-management-bay.vercel.app/${id}`;
    const CreatedShortUrl=await urlModel.create({
        destinationUrl,
        remarks,
        expirationDate,
        shortUrl:shortenUrl
    })

    res.status(200).json({message:"short URL created",CreatedShortUrl})





})

module.exports=router;