import { plainToInstance } from 'class-transformer';

import { ExceptionCode } from '@lib/use-case/exception';

import { BaseResponse } from './base-response.dto';

export const createResponse = (
  ctor,
  data,
  exceptionCode: number = ExceptionCode.SUCCESS,
): BaseResponse =>
  plainToInstance(ctor, {
    exception_code: exceptionCode,
    data,
  });
