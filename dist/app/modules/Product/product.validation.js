"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidationSchema = void 0;
const zod_1 = require("zod");
const createProductZodValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        imageUrl: zod_1.z.string(),
        price: zod_1.z.number(),
        quantity: zod_1.z.number(),
        releaseDate: zod_1.z.string(),
        brand: zod_1.z.string(),
        model: zod_1.z.string(),
        type: zod_1.z.enum(['road', 'mountain', 'hybrid']),
        size: zod_1.z.string(),
        color: zod_1.z.string(),
        material: zod_1.z.string(),
        suspensionType: zod_1.z.string(),
        customAttributes: zod_1.z.string(),
    }),
});
const updateProductZodValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        imageUrl: zod_1.z.string().optional(),
        price: zod_1.z.number().optional(),
        quantity: zod_1.z.number().optional(),
        releaseDate: zod_1.z.string().optional(),
        brand: zod_1.z.string().optional(),
        model: zod_1.z.string().optional(),
        type: zod_1.z.enum(['road', 'mountain', 'hybrid']).optional(),
        size: zod_1.z.string().optional(),
        color: zod_1.z.string().optional(),
        material: zod_1.z.string().optional(),
        suspensionType: zod_1.z.string().optional(),
        customAttributes: zod_1.z.string().optional(),
    }),
});
exports.productValidationSchema = { createProductZodValidation, updateProductZodValidation };
