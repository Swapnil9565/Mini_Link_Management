const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirm_password:{
        type:String,
    },
   },{ timestamps: true })

 // Formatting date and time
   const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',   
      day: '2-digit',   
    });
  };

const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',   // e.g., "03"
      minute: '2-digit', // e.g., "50"
      hour12: true,      // e.g., "AM/PM"
    });
  };

  userSchema.virtual('formattedCreatedDate').get(function () {
    return formatDate(this.createdAt); // Format createdAt date
  });
  
  userSchema.virtual('formattedUpdatedDate').get(function () {
    return formatDate(this.updatedAt); // Format updatedAt date
  });

  userSchema.virtual('formattedCreatedTime').get(function () {
    return formatTime(this.createdAt); // Format createdAt time
  });
  
  userSchema.virtual('formattedUpdatedTime').get(function () {
    return formatTime(this.updatedAt); // Format updatedAt time
  });
  
  userSchema.set('toJSON', { virtuals: true });
  userSchema.set('toObject', { virtuals: true });

module.exports=mongoose.model("user",userSchema);