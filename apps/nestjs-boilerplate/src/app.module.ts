import { Module } from '@nestjs/common';

import { AppConfigModule } from '@lib/config';
import { AppCacheModule } from '@lib/config/app-cache';
import { AppI18nModule } from '@lib/config/app-i18n';
import { AppMicroserviceModule } from '@lib/config/app-microservice';
import { AppMongooseModule } from '@lib/config/app-mongoose';
import { AppSequelizeModule } from '@lib/config/app-sequelize';
import { AppTypeOrmModule } from '@lib/config/app-typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // config modules
    AppConfigModule,
    AppI18nModule,
    AppMongooseModule,
    AppTypeOrmModule,
    AppSequelizeModule,
    AppCacheModule,
    AppMicroserviceModule,

    // use-case modules
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
