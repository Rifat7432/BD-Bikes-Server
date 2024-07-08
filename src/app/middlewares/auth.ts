/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import Jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import catchAsync from '../utils/catchAsync';
import { UnauthorizedError } from '../errors/UnauthorizedErroe';
import { userModel } from '../modules/user/user.modle';
import { AppError } from '../errors/appErrors';
type TUserRole = "seller" | "buyer"
const auth = (...requireRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
      throw new UnauthorizedError(
        httpStatus.UNAUTHORIZED,
        'You do not have the necessary permissions to access this resource',
      );
    }
    const decoded = Jwt.verify(
      token,
      config.jwt_access_secret as string,
    ) as JwtPayload;
    const { role, userId, iat } = decoded;
    const user = userModel.findById(userId);
    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
    }
    if (requireRoles && !requireRoles.includes(role)) {
      throw new AppError(
        httpStatus.UNAUTHORIZED,
        'You do not have the necessary permissions to access this resource',
      );
    }
    req.user = decoded as JwtPayload;
    next();
  });
};

export default auth;
