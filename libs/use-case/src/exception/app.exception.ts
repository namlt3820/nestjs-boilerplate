import { HttpException } from '@nestjs/common';

export class AppException extends HttpException {
  exceptionCode: number;

  constructor(message: string, statusCode: number, exceptionCode: number) {
    super(message, statusCode);
    this.exceptionCode = exceptionCode;
  }
}
