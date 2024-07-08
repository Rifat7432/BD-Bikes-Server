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
const http_status_1 = __importDefault(require("http-status"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const UnauthorizedErroe_1 = require("../errors/UnauthorizedErroe");
const user_modle_1 = require("../modules/user/user.modle");
const appErrors_1 = require("../errors/appErrors");
const auth = (...requireRoles) => {
    return (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const token = req.headers.authorization;
        if (!token) {
            throw new UnauthorizedErroe_1.UnauthorizedError(http_status_1.default.UNAUTHORIZED, 'You do not have the necessary permissions to access this resource');
        }
        const decoded = jsonwebtoken_1.default.verify(token, config_1.default.jwt_access_secret);
        const { role, userId, iat } = decoded;
        const user = user_modle_1.userModel.findById(userId);
        if (!user) {
            throw new appErrors_1.AppError(http_status_1.default.NOT_FOUND, 'This user is not found !');
        }
        if (requireRoles && !requireRoles.includes(role)) {
            throw new appErrors_1.AppError(http_status_1.default.UNAUTHORIZED, 'You do not have the necessary permissions to access this resource');
        }
        req.user = decoded;
        next();
    }));
};
exports.default = auth;
