import { z } from 'zod';

const createSalesHistoryZodValidation = z.object({
  body: z.object({
    bayerName: z.string(),
    slingDate: z.string(),
    quantity: z.number(),
    productId: z.string(),
  }),
});

export const SalesHistoryValidationSchema = {
    createSalesHistoryZodValidation
}