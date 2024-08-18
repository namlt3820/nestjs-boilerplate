import { Module } from '@nestjs/common';

import { AppConfigModule } from '@lib/config';
import { AppI18nModule } from '@lib/config/app-i18n';
import { AppMongooseModule } from '@lib/config/app-mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // config modules
    AppConfigModule,
    AppI18nModule,
    AppMongooseModule,

    // use-case modules
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
