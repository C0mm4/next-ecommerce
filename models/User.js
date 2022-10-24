import mongoose, { Schema } from "mongoose";
import { stringify } from "postcss";

const userSchema = new mongoose.Schema(
	{
    name : {type : String, required : true},
    email : {type : String, required : true, unique : true},
    password : {type : String, required : true},
    isAdmin : { type: Boolean, required : true, defualt : false },
  },
  {
    timestamps:true,
  }
)

const User = mongoose.models.User || mongoose.model('User', userSchema)
export default User