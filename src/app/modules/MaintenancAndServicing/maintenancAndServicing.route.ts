import express from 'express';
import { maintenanceAndServicingControllers } from './maintenancAndServicing.conteoller';
import validateRequest from '../../middlewares/validateRequest';
import { maintenanceAndServicingZodSchema } from './maintenancAndServicing.validation';
import auth from '../../middlewares/auth';
const router = express.Router();

//create maintenance And Servicing Request
router.post(
  '/create-maintenance-servicing-request',
  auth('buyer'),
  validateRequest(
    maintenanceAndServicingZodSchema.CreateMaintenanceAndServicingRequestSchema,
  ),
  maintenanceAndServicingControllers.createMaintenanceAndServicingRequest,
);
//get ALL maintenance And Servicing Request
router.get(
  '/get-all-servicing-requests',

  maintenanceAndServicingControllers.getAllMaintenanceAndServicingRequest,
);
//get ALL maintenance And Servicing Request Of User
router.get(
  '/get-all-servicing-request/:id',
  maintenanceAndServicingControllers.getAllMaintenanceAndServicingRequestOfUser,
);
// update maintenance And Servicing Request
router.put(
  '/complete-servicing-request/:id',
  auth('seller'),
  maintenanceAndServicingControllers.completeMaintenanceAndServicingRequest,
);

export const maintenanceAndServicingRoutes = router;
