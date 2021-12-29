import express, { NextFunction, Request, Response } from "express";
import { check, validationResult } from "express-validator";
import config from "../config";
import { BoardInPutDTO } from "../interfaces/IBoard";
import BoardService from "../services/BoardService";

const create = async (req: Request, res: Response, next: NextFunction) => {

    const { id ,content, title, created, updated, user}: BoardInPutDTO = req.body;
    try {

        const errors = validationResult(req.body);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const  createBoard = await BoardService.createBoard({ id ,content, title, created, updated, user });
        
        res.status(201).json({ message: 'created', createdUserBoard: createBoard.id })

    } catch (err) {
        next(err);
    }
};

export default {
    create
}