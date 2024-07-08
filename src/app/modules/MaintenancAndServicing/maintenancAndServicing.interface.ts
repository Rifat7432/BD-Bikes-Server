import { Types } from 'mongoose';
//Maintenance And Servicing Request Type
export type TMaintenanceAndServicingRequest = {
  bikeId: Types.ObjectId;
  userId: Types.ObjectId;
  lastServicingDate: string;
  nextServicingDate: string;
  servicingPrice: number;
  isCompleted?:boolean
  serviceDetails: string[];
};
