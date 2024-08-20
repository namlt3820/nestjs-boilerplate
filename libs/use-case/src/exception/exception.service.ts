import { HttpStatus, Injectable } from '@nestjs/common';
import * as _ from 'lodash';
import { I18nContext, I18nService } from 'nestjs-i18n';

import { AppException } from './app.exception';
import { ExceptionCode } from './exception-code';

@Injectable()
export class ExceptionService {
  constructor(private readonly i18n: I18nService) {}

  throwAppException(message: string, statusCode = HttpStatus.BAD_REQUEST) {
    const translatedMessage = this.i18n.t(`app.${message}`, {
      lang: I18nContext.current().lang,
    });

    const exceptionCode = _.get(ExceptionCode, message);

    throw new AppException(translatedMessage, statusCode, exceptionCode);
  }
}
