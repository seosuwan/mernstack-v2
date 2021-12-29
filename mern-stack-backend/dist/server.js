"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserRouter_1 = __importDefault(require("./api/route/UserRouter"));
const db_1 = __importDefault(require("./Loaders/db"));
(0, db_1.default)();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors()); // CORS 미들웨어 등록
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(UserRouter_1.default); //라우터
app.set("port", 3001);
app
    .listen(app.get("port"), () => {
    console.log(`${app.get("port")} server is Running`);
})
    .on("error", (err) => {
    console.log(`Error message ${err}`);
});
