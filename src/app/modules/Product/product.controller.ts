import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { responseHandler } from '../../utils/sendResponse';
import { productServices } from './product.service';

const createProduct = catchAsync(async (req, res) => {
  const result = await productServices.createProductIntoDB(req.body);
  responseHandler.sendRes(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product created successfully',
    data: result,
  });
});
const getProduct = catchAsync(async (req, res) => {
  const result = await productServices.getProductFromDB(req.query);
  responseHandler.sendRes(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product found successfully',
    data: result,
  });
});
const updateProduct = catchAsync(async (req, res) => {
  const result = await productServices.updateProductIntoDB(req.params.id,req.body);
  responseHandler.sendRes(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product updated successfully',
    data: result,
  });
});
const saleProduct = catchAsync(async (req, res) => {
  const result = await productServices.saleProductIntoDB(req.params.id,req.body);
  responseHandler.sendRes(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product sold successfully',
    data: result,
  });
});

const deleteProduct = catchAsync(async (req, res) => {
  const result = await productServices.deleteProductIntoDB(req.params.id);
  responseHandler.sendRes(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product deleted successfully',
    data: result,
  });
});

export const productController = {
  createProduct,
  getProduct,
  updateProduct,
  saleProduct,
  deleteProduct
};
