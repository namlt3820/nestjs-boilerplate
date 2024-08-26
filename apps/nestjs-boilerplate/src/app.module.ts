import { Module } from '@nestjs/common';

import { AppConfigModule } from '@lib/config';
import { AppCacheModule } from '@lib/config/app-cache';
import { AppI18nModule } from '@lib/config/app-i18n';
import { AppMicroserviceModule } from '@lib/config/app-microservice';
import { AppMongooseModule } from '@lib/config/app-mongoose';
import { AppSequelizeModule } from '@lib/config/app-sequelize';
import { AppTypeOrmModule } from '@lib/config/app-typeorm';
import { AuthModule } from '@lib/use-case/auth';
import { AuthorModule } from '@lib/use-case/author/author.module';
import { EditorModule } from '@lib/use-case/editor/editor.module';
import { ExceptionModule } from '@lib/use-case/exception';
import { MicroserviceModule } from '@lib/use-case/microservice/microservice.module';
import { UserModule } from '@lib/use-case/user/user.module';

import { AppSocketModule } from './app-socket';

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
    AppSocketModule,

    // use-case modules
    ExceptionModule,
    AuthorModule,
    EditorModule,
    UserModule,
    AuthModule,
    MicroserviceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
