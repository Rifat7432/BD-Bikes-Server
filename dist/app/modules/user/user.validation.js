"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserZodValidation = void 0;
const zod_1 = require("zod");
const createUserZodValidation = zod_1.z.object({
    body: zod_1.z.object({
        username: zod_1.z.string().min(1),
        password: zod_1.z
            .string()
            .min(8, { message: 'Password must be at least 8 characters long' })
            .max(20, { message: 'Password must be at most 20 characters long' }),
        email: zod_1.z.string().email(),
    }),
});
exports.UserZodValidation = {
    createUserZodValidation
};
