"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.maintenanceAndServicingRoutes = void 0;
const express_1 = __importDefault(require("express"));
const maintenancAndServicing_conteoller_1 = require("./maintenancAndServicing.conteoller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const maintenancAndServicing_validation_1 = require("./maintenancAndServicing.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
//create maintenance And Servicing Request
router.post('/create-maintenance-servicing-request', (0, auth_1.default)('buyer'), (0, validateRequest_1.default)(maintenancAndServicing_validation_1.maintenanceAndServicingZodSchema.CreateMaintenanceAndServicingRequestSchema), maintenancAndServicing_conteoller_1.maintenanceAndServicingControllers.createMaintenanceAndServicingRequest);
//get ALL maintenance And Servicing Request
router.get('/get-all-servicing-requests', maintenancAndServicing_conteoller_1.maintenanceAndServicingControllers.getAllMaintenanceAndServicingRequest);
//get ALL maintenance And Servicing Request Of User
router.get('/get-all-servicing-request/:id', maintenancAndServicing_conteoller_1.maintenanceAndServicingControllers.getAllMaintenanceAndServicingRequestOfUser);
// update maintenance And Servicing Request
router.put('/complete-servicing-request/:id', (0, auth_1.default)('seller'), maintenancAndServicing_conteoller_1.maintenanceAndServicingControllers.completeMaintenanceAndServicingRequest);
exports.maintenanceAndServicingRoutes = router;
