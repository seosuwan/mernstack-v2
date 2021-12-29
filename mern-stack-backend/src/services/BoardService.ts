import { BoardInPutDTO } from "../interfaces/IBoard";
import Board from "../models/Board";

const createBoard = (data: BoardInPutDTO) => {
    const board = new Board(data);
    return board.save();
}

export default {
    createBoard
}