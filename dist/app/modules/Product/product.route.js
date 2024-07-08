"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const product_controller_1 = require("./product.controller");
const product_validation_1 = require("./product.validation");
const salesHistory_validation_1 = require("../salesHistory/salesHistory.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.post('/create-product', (0, auth_1.default)('seller'), (0, validateRequest_1.default)(product_validation_1.productValidationSchema.createProductZodValidation), product_controller_1.productController.createProduct);
router.get('/get-products', (0, auth_1.default)('buyer', 'seller'), product_controller_1.productController.getProduct);
router.put('/update-product/:id', (0, auth_1.default)('seller'), (0, validateRequest_1.default)(product_validation_1.productValidationSchema.updateProductZodValidation), product_controller_1.productController.updateProduct);
router.patch('/sale-product/:id', (0, auth_1.default)('seller'), (0, validateRequest_1.default)(salesHistory_validation_1.SalesHistoryValidationSchema.createSalesHistoryZodValidation), product_controller_1.productController.saleProduct);
router.delete('/remove-product/:id', (0, auth_1.default)('seller'), product_controller_1.productController.deleteProduct);
exports.productRoutes = router;
