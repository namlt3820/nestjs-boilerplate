import { AppException } from '../app.exception';
import { ExceptionCode } from '../exception-code';

export const setExceptionCode = (exception: any): number => {
  if (exception instanceof AppException) {
    return exception.exceptionCode;
  }

  const response = exception.getResponse ? exception.getResponse() : null;

  if (response?.message === 'Unauthorized' && response?.statusCode === 401) {
    return ExceptionCode.USER.UNAUTHORIZED;
  }

  return ExceptionCode.GENERIC;
};
