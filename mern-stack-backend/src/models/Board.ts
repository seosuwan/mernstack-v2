import mongoose from "mongoose";
import { Board } from "../interfaces/IBoard";
//getter setter

const BoardSchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    title: {
        type: String
    },
    content: {
        type: String
    } 
    
});
export default mongoose.model<Board & mongoose.Document>("Board", BoardSchema);