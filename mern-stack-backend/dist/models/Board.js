"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
//getter setter
const BoardSchema = new mongoose_1.default.Schema({
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
exports.default = mongoose_1.default.model("Board", BoardSchema);
