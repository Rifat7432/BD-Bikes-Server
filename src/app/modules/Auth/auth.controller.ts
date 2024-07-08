import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { responseHandler } from '../../utils/sendResponse';
import { authenticationServices } from './auth.service';

const loginUser = catchAsync(async (req, res) => {
  const result = await authenticationServices.loginUserIntoDB(req.body);
  responseHandler.sendRes(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User login successfully',
    data: result,
  });
});

export const authenticationControllers = {
    loginUser,
};
