"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordError = void 0;
class PasswordError extends Error {
    constructor(statusCode, message, stack = '') {
        super(message);
        this.statusCode = statusCode;
        if (stack) {
            this.stack = stack;
        }
        else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
exports.PasswordError = PasswordError;
