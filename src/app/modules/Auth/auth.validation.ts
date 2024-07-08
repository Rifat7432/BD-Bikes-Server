import { z } from 'zod';

const loginUserZodSchema = z.object({
  body: z.object({
    username: z.string({
      invalid_type_error: 'Name must be a string',
      required_error: 'name is required',
    }),
    password: z.string({
      invalid_type_error: 'Name must be a string',
      required_error: 'name is required',
    }),
  }),
});

export const authenticationZodSchema = {
    loginUserZodSchema,
};
