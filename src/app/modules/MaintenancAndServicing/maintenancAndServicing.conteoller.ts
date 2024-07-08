import httpStatus from "http-status";
import { responseHandler } from "../../utils/sendResponse";
import { MaintenanceAndServicingService } from "./maintenancAndServicing.service";
import catchAsync from "../../utils/catchAsync";


const createMaintenanceAndServicingRequest = catchAsync(async (req, res) => {
    const result = await MaintenanceAndServicingService.createMaintenanceAndServicingRequestIntoDB(req.body);
    responseHandler.sendRes(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Maintenance And Servicing Request created successfully',
      data: result,
    });
  });

const getAllMaintenanceAndServicingRequest = catchAsync(async (req, res) => {
    const result = await MaintenanceAndServicingService.getALLMaintenanceAndServicingRequestFromDB();
    responseHandler.sendRes(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Maintenance And Servicing Request found successfully',
      data: result,
    });
  });
const getAllMaintenanceAndServicingRequestOfUser = catchAsync(async (req, res) => {
    const result = await MaintenanceAndServicingService.getALLMaintenanceAndServicingRequestOfUserFromDB(req.params.id);
    responseHandler.sendRes(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Maintenance And Servicing Request found successfully',
      data: result,
    });
  });
const completeMaintenanceAndServicingRequest = catchAsync(async (req, res) => {
    const result = await MaintenanceAndServicingService.completeMaintenanceAndServicingRequestIntuDB(req.params.id);
    responseHandler.sendRes(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Maintenance And Servicing Request updated successfully',
      data: result,
    });
  });
  
  export const maintenanceAndServicingControllers = {
    createMaintenanceAndServicingRequest,
    getAllMaintenanceAndServicingRequest,
    getAllMaintenanceAndServicingRequestOfUser,
    completeMaintenanceAndServicingRequest
    
  };
  