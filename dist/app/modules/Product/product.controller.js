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
exports.productController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = require("../../utils/sendResponse");
const product_service_1 = require("./product.service");
const createProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_service_1.productServices.createProductIntoDB(req.body);
    sendResponse_1.responseHandler.sendRes(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Product created successfully',
        data: result,
    });
}));
const getProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_service_1.productServices.getProductFromDB(req.query);
    sendResponse_1.responseHandler.sendRes(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Product found successfully',
        data: result,
    });
}));
const updateProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_service_1.productServices.updateProductIntoDB(req.params.id, req.body);
    sendResponse_1.responseHandler.sendRes(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Product updated successfully',
        data: result,
    });
}));
const saleProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_service_1.productServices.saleProductIntoDB(req.params.id, req.body);
    sendResponse_1.responseHandler.sendRes(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Product sold successfully',
        data: result,
    });
}));
const deleteProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_service_1.productServices.deleteProductIntoDB(req.params.id);
    sendResponse_1.responseHandler.sendRes(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Product deleted successfully',
        data: result,
    });
}));
exports.productController = {
    createProduct,
    getProduct,
    updateProduct,
    saleProduct,
    deleteProduct
};
