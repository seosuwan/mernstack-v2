"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import bcrypt from "bcryptjs";
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const errorGenerator_1 = __importDefault(require("../errors/errorGenerator"));
const express_validator_1 = require("express-validator");
const services_1 = require("../services");
const modify = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password, birth, phone, address, user_interests, job } = req.body;
    try {
        (0, express_validator_1.check)("email", "Please include a valid email").isEmail();
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty())
            return (0, errorGenerator_1.default)({ statusCode: 400 });
        const modifyUser = yield services_1.UserService.modifyUser({
            email, username, password, address, birth, job, phone, user_interests
        });
        return res.status(201).json(modifyUser);
    }
    catch (err) {
        next(err);
    }
});
const exist = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty())
            return (0, errorGenerator_1.default)({ statusCode: 400 });
        const email = req.url.substring(1);
        const foundEmail = yield services_1.UserService.findEmail({ email });
        if (foundEmail) {
            return (0, errorGenerator_1.default)({ statusCode: 401 });
        }
        return res.status(201).json(foundEmail);
    }
    catch (err) {
        next(err);
    }
});
const remove = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty())
            return (0, errorGenerator_1.default)({ statusCode: 400 });
        const email = req.url.substring(1);
        const removeUser = yield services_1.UserService.removeUser({ email });
        if (removeUser) {
            return res.status(201).json("삭제완료!");
        }
    }
    catch (err) {
        next(err);
    }
});
const join = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    (0, express_validator_1.check)("username", "Name is required").not().isEmpty();
    (0, express_validator_1.check)("phone", "phone is required").not().isEmpty();
    (0, express_validator_1.check)("birth", "birth is required").not().isEmpty();
    (0, express_validator_1.check)("email", "Please include a valid email").isEmail();
    (0, express_validator_1.check)("password", "Please enter a password with 8 or more characters").isLength({ min: 8 });
    const { username, email, password, birth, phone, address, user_interests, job } = req.body;
    try {
        const errors = (0, express_validator_1.validationResult)(req.body);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const foundUser = yield services_1.UserService.findLogin({ email, password });
        if (foundUser)
            (0, errorGenerator_1.default)({ statusCode: 409 }); // 이미 가입한 유저 //
        const createdUser = yield services_1.UserService.createUser({
            username, email, password, phone, address, birth, user_interests,
            job
        });
        res.status(201).json({ message: 'created', createdUserEmail: createdUser.email });
    }
    catch (err) {
        next(err);
    }
});
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    (0, express_validator_1.check)("email", "Please include a valid email").isEmail();
    (0, express_validator_1.check)("password", "password is required").exists();
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty())
            return (0, errorGenerator_1.default)({ statusCode: 400 });
        const { email, password } = req.body;
        const user = yield services_1.UserService.findLogin({ email, password });
        if (!user) {
            return (0, errorGenerator_1.default)({ statusCode: 401 });
        }
        const payload = { usertoken: { email: user.email } };
        const myToken = jsonwebtoken_1.default.sign(payload, config_1.default.jwtSecret, { expiresIn: '7s' });
        return res.status(201).json({ userData: user, tokenData: myToken });
    }
    catch (err) {
        next(err);
    }
});
exports.default = {
    join,
    login,
    exist,
    modify,
    remove
};
