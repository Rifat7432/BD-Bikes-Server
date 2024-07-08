"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.salesHistoryModel = void 0;
const mongoose_1 = require("mongoose");
const salesHistorySchema = new mongoose_1.Schema({
    bayerName: {
        type: String,
        required: true
    },
    slingDate: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    productId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
    },
    sellerId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
});
exports.salesHistoryModel = (0, mongoose_1.model)('SalesHistory', salesHistorySchema);
