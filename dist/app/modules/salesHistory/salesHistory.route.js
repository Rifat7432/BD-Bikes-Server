"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.salesHistoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const salesHistory_controller_1 = require("./salesHistory.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
// get Sales History
router.get('/sales', (0, auth_1.default)('seller'), salesHistory_controller_1.salesHistoryController.getSalesHistory);
exports.salesHistoryRoutes = router;
