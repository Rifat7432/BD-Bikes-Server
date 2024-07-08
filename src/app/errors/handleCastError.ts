import httpStatus from 'http-status';
import mongoose from 'mongoose';


const handleCastError = (
  err: mongoose.Error.CastError,
) => {

  const statusCode = httpStatus.NOT_ACCEPTABLE;
  return {
    statusCode,
    message: 'Invalid ID',
    errorMessage:`${err?.value} is not a valid ID!`

  };
};
export default handleCastError;
