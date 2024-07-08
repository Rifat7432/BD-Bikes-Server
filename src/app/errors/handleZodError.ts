import { ZodError } from 'zod';

import httpStatus from 'http-status';

const handleZodError = (err: ZodError) => {
    let errorMessage = ''
  err.issues.map((issue) => {
    return errorMessage +=`${(issue?.path[issue.path.length - 1])} is ${issue.message}.`;
  });
  const statusCode = httpStatus.NOT_ACCEPTABLE;
  return {
    statusCode,
    message: 'Validation Error',
    errorMessage,
  };
};
export default handleZodError;
