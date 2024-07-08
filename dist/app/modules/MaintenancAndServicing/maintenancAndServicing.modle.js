"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maintenanceAndServicingRequestModel = void 0;
const mongoose_1 = require("mongoose");
//maintenance And Servicing Request Schema
const maintenanceAndServicingRequestSchema = new mongoose_1.Schema({
    bikeId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
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
}, { timestamps: true });
exports.maintenanceAndServicingRequestModel = (0, mongoose_1.model)('MaintenanceAndServicingRequest', maintenanceAndServicingRequestSchema);
