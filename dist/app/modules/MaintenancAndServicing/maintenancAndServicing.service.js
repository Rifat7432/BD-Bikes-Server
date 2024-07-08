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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceAndServicingService = void 0;
const maintenancAndServicing_modle_1 = require("./maintenancAndServicing.modle");
//create maintenance And Servicing Request
const createMaintenanceAndServicingRequestIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield maintenancAndServicing_modle_1.maintenanceAndServicingRequestModel.create(payload);
    return result;
});
//get ALL maintenance And Servicing Request
const getALLMaintenanceAndServicingRequestFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield maintenancAndServicing_modle_1.maintenanceAndServicingRequestModel
        .find({
        isCompleted: false,
    }).sort("createdAt")
        .populate({ path: 'userId', select: '-password' })
        .populate('bikeId');
    return result;
});
//get ALL maintenance And Servicing Request Of User
const getALLMaintenanceAndServicingRequestOfUserFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield maintenancAndServicing_modle_1.maintenanceAndServicingRequestModel
        .find({ userId: id }).sort("-createdAt")
        .populate({ path: 'userId', select: '-password' })
        .populate('bikeId');
    return result;
});
// update maintenance And Servicing Request
const completeMaintenanceAndServicingRequestIntuDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield maintenancAndServicing_modle_1.maintenanceAndServicingRequestModel.findByIdAndUpdate(id, { isCompleted: true }, {
        new: true,
    });
    return result;
});
exports.MaintenanceAndServicingService = {
    createMaintenanceAndServicingRequestIntoDB,
    getALLMaintenanceAndServicingRequestFromDB,
    getALLMaintenanceAndServicingRequestOfUserFromDB,
    completeMaintenanceAndServicingRequestIntuDB,
};
