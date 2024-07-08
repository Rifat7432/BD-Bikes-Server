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
const express_1 = __importDefault(require("express"));
const roter_1 = __importDefault(require("./app/roter"));
const cors_1 = __importDefault(require("cors"));
const globleErrorHandeler_1 = require("./app/middlewares/globleErrorHandeler");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api', roter_1.default);
const test = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('Hello World!');
});
app.get('/api', test);
app.use(globleErrorHandeler_1.gobbleErrorHandler.gobbleError);
app.use(globleErrorHandeler_1.gobbleErrorHandler.notFound);
exports.default = app;
