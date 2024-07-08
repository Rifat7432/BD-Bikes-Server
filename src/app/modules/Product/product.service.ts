import httpStatus from 'http-status';
import { AppError } from '../../errors/appErrors';
import { TSalesHistory } from '../salesHistory/salesHistory.interface';
import { TProduct } from './product.interface';
import { productModel } from './product.modle';
import { salesHistoryModel } from '../salesHistory/salesHistory.modle';

const createProductIntoDB = async (product: TProduct) => {
  const result = await productModel.create(product);

  return result;
};
const getProductFromDB = async (query: Record<string, unknown>) => {
  let lowPrice = 100;
  let hightPrice = 1000;
  let searchTerm = '';
  if (query.lowPrice) {
    lowPrice = query.lowPrice as number;
  }
  if (query.hightPrice) {
    hightPrice = query.hightPrice as number;
  }
  const limit = query?.limit ? Number(query?.limit) : 10;
  const page = query?.page ? Number(query?.page) : 1;
  const skip = query?.page ? (page - 1) * limit : 0;
  let sortBy = query?.sortBy ? (query?.sortBy as string) : 'name';
  if (query?.sortOrder === 'asc') {
    sortBy = sortBy.split('-').join('').split(',').join(' ');
  } else if (query?.sortOrder === 'desc') {
    sortBy = '-' + sortBy.split('-').join('').split(',').join(' -');
  } else {
    sortBy = sortBy.split(',').join(' ');
  }
  const filterQuery: Record<string, unknown> = {};
  if (query?.model) {
    filterQuery.model = query?.model;
  }
  if (query?.brand) {
    filterQuery.brand = query?.brand;
  }
  if (query?.releaseDate) {
    filterQuery.releaseDate = query?.releaseDate;
  }
  if (query?.type) {
    filterQuery.type = query?.type;
  }
  if (query?.size) {
    filterQuery.size = query?.size;
  }
  if (query?.color) {
    filterQuery.color = query?.color;
  }
  if (query?.material) {
    filterQuery.material = query?.material;
  }
  if (query?.suspensionType) {
    filterQuery.suspensionType = query?.suspensionType;
  }
  if (query?.customAttributes) {
    filterQuery.customAttributes = query?.customAttributes;
  }
  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }
  const result = await productModel
    .find({
      ...filterQuery,
      price: { $gte: lowPrice, $lte: hightPrice },
      name: { $regex: searchTerm, $options: 'i' },
      isDeleted: false,
    })
    .sort(sortBy)
    .limit(limit)
    .skip(skip);

  return result;
};
const updateProductIntoDB = async (id: string, product: Partial<TProduct>) => {
  const result = await productModel.findByIdAndUpdate(id, product, {
    new: true,
  });
  return result;
};
const saleProductIntoDB = async (id: string, payLoad: TSalesHistory) => {
  const product = await productModel.findById(id);
  if (!product) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product is not found');
  }
  if (product?.quantity === 0 || product?.quantity < payLoad.quantity) {
    throw new AppError(httpStatus.NOT_ACCEPTABLE, 'Out of stock');
  }
  const quantity = product.quantity - payLoad.quantity;
  const result = await productModel.findByIdAndUpdate(
    id,
    { quantity, isDeleted: quantity === 0 ? true : false },
    {
      new: true,
    },
  );
  if (result) {
    await salesHistoryModel.create(payLoad);
  }

  return result;
};
const deleteProductIntoDB = async (id: string) => {
  const result = await productModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );

  return result;
};
export const productServices = {
  createProductIntoDB,
  getProductFromDB,
  updateProductIntoDB,
  saleProductIntoDB,
  deleteProductIntoDB,
};
