import { Schema, model } from 'mongoose';
import { TProduct } from './product.interface';

const productSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    releaseDate: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['road', 'mountain', 'hybrid'],
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    material: {
      type: String,
      required: true,
    },
    suspensionType: {
      type: String,
      required: true,
    },
    customAttributes: {
      type: String,
      required: true,
    },
    isDeleted:{
      type:Boolean,
      default:false,
  },
  },
  { timestamps: true },
);

export const productModel = model<TProduct>('Product', productSchema);
