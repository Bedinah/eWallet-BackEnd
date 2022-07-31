import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: String,
    address: {
      state: String,
      city: String,
    },
    
    
    isActive: {
      type: Boolean,
      default:true,
    },
  },{timestamps:true});
  
  const userModel = mongoose.model("user", userSchema);
  
  export default userModel;