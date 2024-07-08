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
exports.productServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const appErrors_1 = require("../../errors/appErrors");
const product_modle_1 = require("./product.modle");
const salesHistory_modle_1 = require("../salesHistory/salesHistory.modle");
const createProductIntoDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_modle_1.productModel.create(product);
    return result;
});
const getProductFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    let lowPrice = 100;
    let hightPrice = 1000;
    let searchTerm = '';
    if (query.lowPrice) {
        lowPrice = query.lowPrice;
    }
    if (query.hightPrice) {
        hightPrice = query.hightPrice;
    }
    const limit = (query === null || query === void 0 ? void 0 : query.limit) ? Number(query === null || query === void 0 ? void 0 : query.limit) : 10;
    const page = (query === null || query === void 0 ? void 0 : query.page) ? Number(query === null || query === void 0 ? void 0 : query.page) : 1;
    const skip = (query === null || query === void 0 ? void 0 : query.page) ? (page - 1) * limit : 0;
    let sortBy = (query === null || query === void 0 ? void 0 : query.sortBy) ? query === null || query === void 0 ? void 0 : query.sortBy : 'name';
    if ((query === null || query === void 0 ? void 0 : query.sortOrder) === 'asc') {
        sortBy = sortBy.split('-').join('').split(',').join(' ');
    }
    else if ((query === null || query === void 0 ? void 0 : query.sortOrder) === 'desc') {
        sortBy = '-' + sortBy.split('-').join('').split(',').join(' -');
    }
    else {
        sortBy = sortBy.split(',').join(' ');
    }
    const filterQuery = {};
    if (query === null || query === void 0 ? void 0 : query.model) {
        filterQuery.model = query === null || query === void 0 ? void 0 : query.model;
    }
    if (query === null || query === void 0 ? void 0 : query.brand) {
        filterQuery.brand = query === null || query === void 0 ? void 0 : query.brand;
    }
    if (query === null || query === void 0 ? void 0 : query.releaseDate) {
        filterQuery.releaseDate = query === null || query === void 0 ? void 0 : query.releaseDate;
    }
    if (query === null || query === void 0 ? void 0 : query.type) {
        filterQuery.type = query === null || query === void 0 ? void 0 : query.type;
    }
    if (query === null || query === void 0 ? void 0 : query.size) {
        filterQuery.size = query === null || query === void 0 ? void 0 : query.size;
    }
    if (query === null || query === void 0 ? void 0 : query.color) {
        filterQuery.color = query === null || query === void 0 ? void 0 : query.color;
    }
    if (query === null || query === void 0 ? void 0 : query.material) {
        filterQuery.material = query === null || query === void 0 ? void 0 : query.material;
    }
    if (query === null || query === void 0 ? void 0 : query.suspensionType) {
        filterQuery.suspensionType = query === null || query === void 0 ? void 0 : query.suspensionType;
    }
    if (query === null || query === void 0 ? void 0 : query.customAttributes) {
        filterQuery.customAttributes = query === null || query === void 0 ? void 0 : query.customAttributes;
    }
    if (query === null || query === void 0 ? void 0 : query.searchTerm) {
        searchTerm = query === null || query === void 0 ? void 0 : query.searchTerm;
    }
    const result = yield product_modle_1.productModel
        .find(Object.assign(Object.assign({}, filterQuery), { price: { $gte: lowPrice, $lte: hightPrice }, name: { $regex: searchTerm, $options: 'i' }, isDeleted: false }))
        .sort(sortBy)
        .limit(limit)
        .skip(skip);
    return result;
});
const updateProductIntoDB = (id, product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_modle_1.productModel.findByIdAndUpdate(id, product, {
        new: true,
    });
    return result;
});
const saleProductIntoDB = (id, payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_modle_1.productModel.findById(id);
    if (!product) {
        throw new appErrors_1.AppError(http_status_1.default.NOT_FOUND, 'Product is not found');
    }
    if ((product === null || product === void 0 ? void 0 : product.quantity) === 0 || (product === null || product === void 0 ? void 0 : product.quantity) < payLoad.quantity) {
        throw new appErrors_1.AppError(http_status_1.default.NOT_ACCEPTABLE, 'Out of stock');
    }
    const quantity = product.quantity - payLoad.quantity;
    const result = yield product_modle_1.productModel.findByIdAndUpdate(id, { quantity, isDeleted: quantity === 0 ? true : false }, {
        new: true,
    });
    if (result) {
        yield salesHistory_modle_1.salesHistoryModel.create(payLoad);
    }
    return result;
});
const deleteProductIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_modle_1.productModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    return result;
});
exports.productServices = {
    createProductIntoDB,
    getProductFromDB,
    updateProductIntoDB,
    saleProductIntoDB,
    deleteProductIntoDB,
};
