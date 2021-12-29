"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generalErrorHandler = (err, req, res, next) => {
    const { message, statusCode } = err;
    //console.error(err);
    res.status(statusCode || 500).json({ message });
};
exports.default = generalErrorHandler;
