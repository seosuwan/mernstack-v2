"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
const createUser = (data) => {
    const user = new User_1.default(data);
    return user.save();
};
const modifyUser = (data) => {
    const { email, username, password, address, birth, job, phone, user_interests } = data;
    return User_1.default.updateOne({ email: email }, { username, password, address, birth, job, phone, user_interests });
};
const findLogin = (data) => {
    const { email, password } = data;
    return User_1.default.findOne({ email, password });
};
const removeUser = (data) => {
    const { email } = data;
    return User_1.default.deleteOne({ email });
};
const findEmail = (data) => {
    const { email } = data;
    return User_1.default.findOne({ email });
};
exports.default = {
    createUser,
    findLogin,
    findEmail,
    modifyUser,
    removeUser
};
