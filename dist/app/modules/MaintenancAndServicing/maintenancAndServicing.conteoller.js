"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.maintenanceAndServicingControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = require("../../utils/sendResponse");
const maintenancAndServicing_service_1 = require("./maintenancAndServicing.service");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const createMaintenanceAndServicingRequest = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield maintenancAndServicing_service_1.MaintenanceAndServicingService.createMaintenanceAndServicingRequestIntoDB(req.body);
    sendResponse_1.responseHandler.sendRes(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Maintenance And Servicing Request created successfully',
        data: result,
    });
}));
const getAllMaintenanceAndServicingRequest = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield maintenancAndServicing_service_1.MaintenanceAndServicingService.getALLMaintenanceAndServicingRequestFromDB();
    sendResponse_1.responseHandler.sendRes(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Maintenance And Servicing Request found successfully',
        data: result,
    });
}));
const getAllMaintenanceAndServicingRequestOfUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield maintenancAndServicing_service_1.MaintenanceAndServicingService.getALLMaintenanceAndServicingRequestOfUserFromDB(req.params.id);
    sendResponse_1.responseHandler.sendRes(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Maintenance And Servicing Request found successfully',
        data: result,
    });
}));
const completeMaintenanceAndServicingRequest = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield maintenancAndServicing_service_1.MaintenanceAndServicingService.completeMaintenanceAndServicingRequestIntuDB(req.params.id);
    sendResponse_1.responseHandler.sendRes(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Maintenance And Servicing Request updated successfully',
        data: result,
    });
}));
exports.maintenanceAndServicingControllers = {
    createMaintenanceAndServicingRequest,
    getAllMaintenanceAndServicingRequest,
    getAllMaintenanceAndServicingRequestOfUser,
    completeMaintenanceAndServicingRequest
};
