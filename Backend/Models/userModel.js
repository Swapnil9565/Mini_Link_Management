const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirm_password: {
      type: String,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
    last_logged_in: {
       type: Date, 
       default: null 
     },
     formattedLoginDate:{
      type:String
     }
  },
);


module.exports = mongoose.model("user", userSchema);
