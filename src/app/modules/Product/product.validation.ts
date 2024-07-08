import { z } from 'zod';

const createProductZodValidation = z.object({
  body: z.object({
    name: z.string(),
    imageUrl: z.string(),
    price: z.number(),
    quantity: z.number(),
    releaseDate: z.string(),
    brand: z.string(),
    model: z.string(),
    type: z.enum(['road', 'mountain', 'hybrid']),
    size: z.string(),
    color: z.string(),
    material: z.string(),
    suspensionType: z.string(),
    customAttributes: z.string(),
  }),
});
const updateProductZodValidation = z.object({
  body: z.object({
    name: z.string().optional(),
    imageUrl: z.string().optional(),
    price: z.number().optional(),
    quantity: z.number().optional(),
    releaseDate: z.string().optional(),
    brand: z.string().optional(),
    model: z.string().optional(),
    type: z.enum(['road', 'mountain', 'hybrid']).optional(),
    size: z.string().optional(),
    color: z.string().optional(),
    material: z.string().optional(),
    suspensionType: z.string().optional(),
    customAttributes: z.string().optional(),
  }),
});

export const productValidationSchema = { createProductZodValidation,updateProductZodValidation };
