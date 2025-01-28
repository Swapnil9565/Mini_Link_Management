const mongoose=require("mongoose");

const UrlSchema=mongoose.Schema({
    destinationUrl:{
        type:String,
        required:true
    },
    remarks:{
        type:String,
        required:true
    },
    expirationDate:{
        type: Date,
        required: true,
    }
},{ timestamps: true });

module.exports = mongoose.model('Url', UrlSchema);