"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticationZodSchema = void 0;
const zod_1 = require("zod");
const loginUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        username: zod_1.z.string({
            invalid_type_error: 'Name must be a string',
            required_error: 'name is required',
        }),
        password: zod_1.z.string({
            invalid_type_error: 'Name must be a string',
            required_error: 'name is required',
        }),
    }),
});
exports.authenticationZodSchema = {
    loginUserZodSchema,
};
