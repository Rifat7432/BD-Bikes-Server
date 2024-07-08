import { z } from 'zod';

const CreateMaintenanceAndServicingRequestSchema = z.object({
  body: z.object({
    bikeId: z.string(),
    userId: z.string(),
    servicingPrice: z.number(),
    lastServicingDate: z.string(),
    nextServicingDate: z.string(),
    serviceDetails: z.array(z.string()).nonempty(),
  }),
});

export const maintenanceAndServicingZodSchema = {
  CreateMaintenanceAndServicingRequestSchema,
};
