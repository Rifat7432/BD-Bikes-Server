import { TMaintenanceAndServicingRequest } from './maintenancAndServicing.interface';
import { maintenanceAndServicingRequestModel } from './maintenancAndServicing.modle';
//create maintenance And Servicing Request
const createMaintenanceAndServicingRequestIntoDB = async (
  payload: TMaintenanceAndServicingRequest,
) => {
  const result = await maintenanceAndServicingRequestModel.create(payload);

  return result;
};
//get ALL maintenance And Servicing Request
const getALLMaintenanceAndServicingRequestFromDB = async () => {
  const result = await maintenanceAndServicingRequestModel
    .find({
      isCompleted: false,
    }).sort("createdAt")
    .populate({ path: 'userId', select: '-password' })
    .populate('bikeId');

  return result;
};
//get ALL maintenance And Servicing Request Of User
const getALLMaintenanceAndServicingRequestOfUserFromDB = async (id: string) => {
  const result = await maintenanceAndServicingRequestModel
    .find({ userId: id }).sort("-createdAt")
    .populate({ path: 'userId', select: '-password' })
    .populate('bikeId');
  return result;
};
// update maintenance And Servicing Request
const completeMaintenanceAndServicingRequestIntuDB = async (id: string) => {
  const result = await maintenanceAndServicingRequestModel.findByIdAndUpdate(
    id,
    { isCompleted: true },
    {
      new: true,
    },
  );
  return result;
};

export const MaintenanceAndServicingService = {
  createMaintenanceAndServicingRequestIntoDB,
  getALLMaintenanceAndServicingRequestFromDB,
  getALLMaintenanceAndServicingRequestOfUserFromDB,
  completeMaintenanceAndServicingRequestIntuDB,
};
