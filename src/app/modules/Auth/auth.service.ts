import httpStatus from 'http-status';
import { AppError } from '../../errors/appErrors';
import { userModel } from '../user/user.modle';
import { TLoginUser } from './auth.interface';
import bcrypt from 'bcrypt';
import config from '../../config';
import { createToken } from './Auth.Util';
import { PasswordError } from '../../errors/passwordError';

const loginUserIntoDB = async (payLoad: TLoginUser) => {
  const user = await userModel.findOne({
    username: payLoad?.username,
  });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User is not registered');
  }
  const isPasswordCorrect = await bcrypt.compare(
    payLoad?.password,
    user?.password,
  );
  if (!isPasswordCorrect) {
    throw new PasswordError(httpStatus.FORBIDDEN, 'Invalid password');
  }
  const jwtPayLoad = {
    _id: user?._id,
    email: user?.email,
    role:user?.role
  };
  const accessToken = createToken(jwtPayLoad,config.jwt_access_secret as string,'5d');
  const userData = await userModel.findById(user?._id,{password:0});
  return {
    user:userData,
    token:accessToken
}
};

export const authenticationServices = {
  loginUserIntoDB,
};
