"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesHistoryValidationSchema = void 0;
const zod_1 = require("zod");
const createSalesHistoryZodValidation = zod_1.z.object({
    body: zod_1.z.object({
        bayerName: zod_1.z.string(),
        slingDate: zod_1.z.string(),
        quantity: zod_1.z.number(),
        productId: zod_1.z.string(),
    }),
});
exports.SalesHistoryValidationSchema = {
    createSalesHistoryZodValidation
};
