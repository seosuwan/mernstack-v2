"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Board_1 = __importDefault(require("../models/Board"));
const createBoard = (data) => {
    const board = new Board_1.default(data);
    return board.save();
};
exports.default = {
    createBoard
};
