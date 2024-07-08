import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';

export const createToken = (
  jwtPayLoad: { _id: Types.ObjectId; email: string },
  secret: string,
  expiresIn: string,
) => {
  const accessToken = jwt.sign(jwtPayLoad, secret, { expiresIn:expiresIn });
  return accessToken;
};
