"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
//getter setter
const UserSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
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
    user_interests: {
        type: String
    },
    job: {
        type: String
    },
    token: {
        type: String
    }
});
exports.default = mongoose_1.default.model("User", UserSchema);
