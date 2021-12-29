import mongoose from "mongoose";
import { IUser } from "../interfaces/IUser";
//getter setter

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
    birth: {
        type: String
    },
    user_interests:{
        type: String
    },
    job: {
        type: String
    },
    token:{
        type: String
    }
    
});
export default mongoose.model<IUser & mongoose.Document>("User", UserSchema);