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
exports.authenticationServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const appErrors_1 = require("../../errors/appErrors");
const user_modle_1 = require("../user/user.modle");
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../../config"));
const Auth_Util_1 = require("./Auth.Util");
const passwordError_1 = require("../../errors/passwordError");
const loginUserIntoDB = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_modle_1.userModel.findOne({
        username: payLoad === null || payLoad === void 0 ? void 0 : payLoad.username,
    });
    if (!user) {
        throw new appErrors_1.AppError(http_status_1.default.NOT_FOUND, 'User is not registered');
    }
    const isPasswordCorrect = yield bcrypt_1.default.compare(payLoad === null || payLoad === void 0 ? void 0 : payLoad.password, user === null || user === void 0 ? void 0 : user.password);
    if (!isPasswordCorrect) {
        throw new passwordError_1.PasswordError(http_status_1.default.FORBIDDEN, 'Invalid password');
    }
    const jwtPayLoad = {
        _id: user === null || user === void 0 ? void 0 : user._id,
        email: user === null || user === void 0 ? void 0 : user.email,
        role: user === null || user === void 0 ? void 0 : user.role
    };
    const accessToken = (0, Auth_Util_1.createToken)(jwtPayLoad, config_1.default.jwt_access_secret, '5d');
    const userData = yield user_modle_1.userModel.findById(user === null || user === void 0 ? void 0 : user._id, { password: 0 });
    return {
        user: userData,
        token: accessToken
    };
});
exports.authenticationServices = {
    loginUserIntoDB,
};
