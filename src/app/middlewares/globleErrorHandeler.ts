/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

import { ZodError } from 'zod';
import config from '../config';
import { AppError } from '../errors/appErrors';
import handleZodError from '../errors/handleZodError';
import handleValidationError from '../errors/handleValidationError';
import handleCastError from '../errors/handleCastError';
import handleDuplicateError from '../errors/handleDuplicateError';
import { PasswordError } from '../errors/passwordError';
import { UnauthorizedError } from '../errors/UnauthorizedErroe';

const gobbleError: ErrorRequestHandler = (err, req, res, next) => {
  let errorMessage = '';
  let statusCode = 500;
  let massage = 'something went wrong !!';

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError?.statusCode;
    massage = simplifiedError?.message;
    errorMessage = simplifiedError?.errorMessage;
  } else if (err?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(err);
    statusCode = simplifiedError?.statusCode;
    massage = simplifiedError?.message;
    errorMessage = simplifiedError?.errorMessage;
  } else if (err?.name === 'CastError') {
    const simplifiedError = handleCastError(err);
    statusCode = simplifiedError?.statusCode;
    massage = simplifiedError?.message;
    errorMessage = simplifiedError?.errorMessage;
  } else if (err?.code === 11000) {
    const simplifiedError = handleDuplicateError(err);
    statusCode = simplifiedError?.statusCode;
    massage = simplifiedError?.message;
    errorMessage = simplifiedError?.errorMessage;
  } else if (err instanceof AppError) {
    statusCode = err?.statusCode;
    massage = err?.message;
    errorMessage = err?.message;
  } else if (err instanceof Error) {
    massage = err?.message;
    errorMessage = err?.message;
  } else if (err instanceof PasswordError) {
    return res.status(err?.statusCode).json({
      success: false,
      statusCode: err?.statusCode,
      massage,
      data: null,
      stack: null,
    });
  }else if (err instanceof UnauthorizedError) {
    return res.status(err?.statusCode).json({
      success: false,
      massage:'Unauthorized Access',
      errorMessage:err?.message,
      errorDetails: null,
      stack: null,
    });
  }
  return res.status(statusCode).json({
    success: false,
    massage,
    errorMessage,
    errorDetails: err,
    stack: config.NODE_ENV === 'development' ? err?.stack : null,
  });
};
const notFound = (req: Request, res: Response, next: NextFunction) => {
  const url = req.url.split('?')[0];
  return res.status(httpStatus.NOT_FOUND).json({
    success: false,
    massage: 'API Not Fount !!',
    errorMessage: `${req.method} ${url} is not acceptable api`,
    errorDetails: '',
  });
};
export const gobbleErrorHandler = {
  gobbleError,
  notFound,
};
