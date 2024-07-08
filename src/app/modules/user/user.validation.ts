import { z } from 'zod';

const createUserZodValidation = z.object({
  body: z.object({
    username: z.string().min(1),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long' })
      .max(20, { message: 'Password must be at most 20 characters long' }),
    email: z.string().email(),
    role: z.enum(["buyer", "seller"]),
  }),
});


export const UserZodValidation ={
  createUserZodValidation
};
