"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gobbleErrorHandler = void 0;
const http_status_1 = __importDefault(require("http-status"));
const zod_1 = require("zod");
const config_1 = __importDefault(require("../config"));
const appErrors_1 = require("../errors/appErrors");
const handleZodError_1 = __importDefault(require("../errors/handleZodError"));
const handleValidationError_1 = __importDefault(require("../errors/handleValidationError"));
const handleCastError_1 = __importDefault(require("../errors/handleCastError"));
const handleDuplicateError_1 = __importDefault(require("../errors/handleDuplicateError"));
const passwordError_1 = require("../errors/passwordError");
const UnauthorizedErroe_1 = require("../errors/UnauthorizedErroe");
const gobbleError = (err, req, res, next) => {
    let errorMessage = '';
    let statusCode = 500;
    let massage = 'something went wrong !!';
    if (err instanceof zod_1.ZodError) {
        const simplifiedError = (0, handleZodError_1.default)(err);
        statusCode = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.statusCode;
        massage = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.message;
        errorMessage = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.errorMessage;
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === 'ValidationError') {
        const simplifiedError = (0, handleValidationError_1.default)(err);
        statusCode = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.statusCode;
        massage = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.message;
        errorMessage = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.errorMessage;
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) === 'CastError') {
        const simplifiedError = (0, handleCastError_1.default)(err);
        statusCode = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.statusCode;
        massage = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.message;
        errorMessage = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.errorMessage;
    }
    else if ((err === null || err === void 0 ? void 0 : err.code) === 11000) {
        const simplifiedError = (0, handleDuplicateError_1.default)(err);
        statusCode = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.statusCode;
        massage = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.message;
        errorMessage = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.errorMessage;
    }
    else if (err instanceof appErrors_1.AppError) {
        statusCode = err === null || err === void 0 ? void 0 : err.statusCode;
        massage = err === null || err === void 0 ? void 0 : err.message;
        errorMessage = err === null || err === void 0 ? void 0 : err.message;
    }
    else if (err instanceof Error) {
        massage = err === null || err === void 0 ? void 0 : err.message;
        errorMessage = err === null || err === void 0 ? void 0 : err.message;
    }
    else if (err instanceof passwordError_1.PasswordError) {
        return res.status(err === null || err === void 0 ? void 0 : err.statusCode).json({
            success: false,
            statusCode: err === null || err === void 0 ? void 0 : err.statusCode,
            massage,
            data: null,
            stack: null,
        });
    }
    else if (err instanceof UnauthorizedErroe_1.UnauthorizedError) {
        return res.status(err === null || err === void 0 ? void 0 : err.statusCode).json({
            success: false,
            massage: 'Unauthorized Access',
            errorMessage: err === null || err === void 0 ? void 0 : err.message,
            errorDetails: null,
            stack: null,
        });
    }
    return res.status(statusCode).json({
        success: false,
        massage,
        errorMessage,
        errorDetails: err,
        stack: config_1.default.NODE_ENV === 'development' ? err === null || err === void 0 ? void 0 : err.stack : null,
    });
};
const notFound = (req, res, next) => {
    const url = req.url.split('?')[0];
    return res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        massage: 'API Not Fount !!',
        errorMessage: `${req.method} ${url} is not acceptable api`,
        errorDetails: '',
    });
};
exports.gobbleErrorHandler = {
    gobbleError,
    notFound,
};
