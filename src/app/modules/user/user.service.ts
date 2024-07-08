import httpStatus from 'http-status';
import { AppError } from '../../errors/appErrors';
import { TUser } from './user.interface';
import { userModel } from './user.modle';
const createUserIntoDB = async (user: TUser) => {
  const result = await userModel.create(user);
  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to register');
  }
  const data = await userModel.findById(result._id, {
    password: 0,
    passwordHistory: 0,
  });

  return data;
};
export const userServices = {
  createUserIntoDB,
};
