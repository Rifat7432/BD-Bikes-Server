"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maintenanceAndServicingZodSchema = void 0;
const zod_1 = require("zod");
const CreateMaintenanceAndServicingRequestSchema = zod_1.z.object({
    body: zod_1.z.object({
        bikeId: zod_1.z.string(),
        userId: zod_1.z.string(),
        servicingPrice: zod_1.z.number(),
        lastServicingDate: zod_1.z.string(),
        nextServicingDate: zod_1.z.string(),
        serviceDetails: zod_1.z.array(zod_1.z.string()).nonempty(),
    }),
});
exports.maintenanceAndServicingZodSchema = {
    CreateMaintenanceAndServicingRequestSchema,
};
