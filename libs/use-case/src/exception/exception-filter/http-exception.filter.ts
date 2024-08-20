import { Catch, HttpException, Logger } from '@nestjs/common';

import { createResponse } from '@lib/use-case/rest-api';

import { ExceptionResponse } from '../exception.response';
import { setExceptionCode } from './set-exception-code';

@Catch(HttpException)
export class HttpExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception, host) {
    this.logger.error(exception);

    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();
    const repsonse = exception.getResponse();
    const exceptionCode = setExceptionCode(exception);

    response.status(status).json(
      createResponse(
        ExceptionResponse,
        {
          status_code: status,
          timestamp: new Date().toISOString(),
          path: request.url,
          message: repsonse,
        },
        exceptionCode,
      ),
    );
  }
}
