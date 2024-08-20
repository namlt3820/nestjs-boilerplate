import { Type } from 'class-transformer';

import { BaseResponse } from '@lib/use-case/rest-api';

export class ExceptionData {
  status_code: number;
  timestamp: string;
  path: string;
  message: string;
}

export class ExceptionResponse extends BaseResponse {
  @Type(() => ExceptionData)
  data: ExceptionData;
}
