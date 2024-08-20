import { Global, Module } from '@nestjs/common';

import { AppI18nModule } from '@lib/config/app-i18n';

import { ExceptionService } from './exception.service';

@Global()
@Module({
  imports: [AppI18nModule],
  providers: [ExceptionService],
  exports: [ExceptionService],
})
export class ExceptionModule {}
