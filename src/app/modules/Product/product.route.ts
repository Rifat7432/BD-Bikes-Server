import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { productController } from './product.controller';
import { productValidationSchema } from './product.validation';
import { SalesHistoryValidationSchema } from '../salesHistory/salesHistory.validation';
import auth from '../../middlewares/auth';



const router = express.Router();

router.post(
  '/create-product',
  auth('seller'),
  validateRequest(productValidationSchema.createProductZodValidation),
  productController.createProduct,
);
router.get(
  '/get-products',
  auth('buyer','seller'),
  productController.getProduct,
);
router.put(
  '/update-product/:id',
  auth('seller'),
  validateRequest(productValidationSchema.updateProductZodValidation),
  productController.updateProduct,
);
router.patch(
  '/sale-product/:id',
  auth('seller'),
  validateRequest(SalesHistoryValidationSchema.createSalesHistoryZodValidation),
  productController.saleProduct,
);
router.delete(
  '/remove-product/:id',
  auth('seller'),
  productController.deleteProduct,
);
export const productRoutes = router;
