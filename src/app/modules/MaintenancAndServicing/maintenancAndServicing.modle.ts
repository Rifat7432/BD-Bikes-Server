import { Schema, model } from 'mongoose';
import { TMaintenanceAndServicingRequest } from './maintenancAndServicing.interface';
//maintenance And Servicing Request Schema
const maintenanceAndServicingRequestSchema =
  new Schema<TMaintenanceAndServicingRequest>(
    {
      bikeId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
      },
      servicingPrice: {
        type: Number,
        required: true,
      },
      lastServicingDate: {
        type: String,
        required: true,
      },
      nextServicingDate: {
        type: String,
        required: true,
      },
      serviceDetails: {
        type: [String],
        required: true,
      },
      isCompleted: {
        type: Boolean,
        default: false,
      },
    },
    { timestamps: true },
  );

export const maintenanceAndServicingRequestModel =
  model<TMaintenanceAndServicingRequest>(
    'MaintenanceAndServicingRequest',
    maintenanceAndServicingRequestSchema,
  );
