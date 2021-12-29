import express, { NextFunction, Request, Response } from "express";
// import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config";
import errorGenerator from "../errors/errorGenerator";
import { check, validationResult } from "express-validator";
import { IUserInPutDTO } from "../interfaces/IUser";
import { UserService } from "../services";
import User from "../models/User";

const modify = async (req: Request, res: Response, next: NextFunction) => {
    const { username, email, password, birth, phone, address, user_interests, job }: IUserInPutDTO = req.body;

    try {
        check("email", "Please include a valid email").isEmail();
        const errors = validationResult(req);
        if (!errors.isEmpty()) 
        
        return errorGenerator({ statusCode: 400 });
        

        const modifyUser = await UserService.modifyUser({
            email, username, password, address, birth, job, phone, user_interests
        });

        return res.status(201).json(modifyUser)
    } catch (err) {
        next(err);
    }
}
const exist = async (req: Request, res: Response, next: NextFunction) => {
    console.log(`======exist${JSON.stringify(req.body)}`)
    try {
        console.log(`======exist try${JSON.stringify(req.body)}`)
        const errors = validationResult(req);
        if (!errors.isEmpty()) 
        return  errorGenerator({ statusCode: 400 });

        const email = req.url.substring(1);
        const foundEmail = await UserService.findEmail({ email });
        console.log(`======foundEmail${JSON.stringify(foundEmail)}`)
        if (foundEmail) {
            console.log(`중복된 이메일이 없습니다`)
            return  errorGenerator({ statusCode: 401 });
        }else{
            return console.log(`======리턴 foundEmail${JSON.stringify(foundEmail)}`),  res.status(201).json(foundEmail)
        }
        
    } catch (err) {
        next(err);
    }

}

const remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return  errorGenerator({ statusCode: 400 });

        const email = req.url.substring(1);
        const removeUser = await UserService.removeUser({ email });
        if (removeUser) {
            return res.status(201).json("삭제완료!")
        }
    } catch (err) {
        next(err);
    }

}
const join = async (req: Request, res: Response, next: NextFunction) => {
    console.log("들어옴")
    check("username", "Name is required").not().isEmpty();
    check("phone", "phone is required").not().isEmpty();
    check("birth", "birth is required").not().isEmpty();
    check("email", "Please include a valid email").isEmail();
    check("password", "Please enter a password with 8 or more characters").isLength({ min: 8 });
    const { username, email, password, birth, phone, address, user_interests, job }: IUserInPutDTO = req.body;
    console.log(`========IUserInPutDTO${JSON.stringify(req.body)}`)
    try {
        console.log(`========try ${JSON.stringify(req.body)}`)
        const errors = validationResult(req.body);
        if (!errors.isEmpty()) {
            return console.log("에러가있어1"), res.status(400).json({ errors: errors.array() });
        }
        const foundUser = await UserService.findLogin({ email, password });
        console.log(`======================쿼리 문${foundUser}`)
        // if (foundUser) errorGenerator({ statusCode: 409 }) ,console.log("에러가있어2");  // 이미 가입한 유저 //
        console.log(`======================쿼리 문22222222${foundUser}`)
        const createdUser = await UserService.createUser({
            username, email, password, phone, address, birth, user_interests,
            job
        });
        console.log(`======================크리에이터 유저${createdUser}`)
        res.status(201).json({ message: 'created', createdUserEmail: createdUser.email })

    } catch (err) {
        next(err);
    }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
    check("email", "Please include a valid email").isEmail();
    check("password", "password is required").exists();
    try {
        console.log(`=====================trytry`)
        const errors = validationResult(req);
        if (!errors.isEmpty()) return errorGenerator({ statusCode: 400 });

        const { email, password } = req.body;
        const user = await UserService.findLogin({ email, password });
        console.log(`=====================쿼리문 유저${user}`)
        if (!user) {
            return errorGenerator({ statusCode: 401 });
        }
        const payload = { usertoken: { email: user.email } };
        const myToken = jwt.sign(
            payload,
            config.jwtSecret,
            { expiresIn: '7d' },
            );
            return console.log(`======================유저${JSON.stringify({user, myToken})}`), res.status(201).json({userData : user, tokenData: myToken})
    } catch (err) {
        next(err);
    }
}
export default {
    join,
    login,
    exist,
    modify,
    remove
}