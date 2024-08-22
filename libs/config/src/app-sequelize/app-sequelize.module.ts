import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  SequelizeModule,
  SequelizeModuleAsyncOptions,
} from '@nestjs/sequelize';
import { ModelCtor } from 'sequelize-typescript';

import { UserModel } from './model';

const models: ModelCtor[] = [UserModel];

const sequelizeModuleAsyncOptions: SequelizeModuleAsyncOptions = {
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    return {
      uri: configService.get<string>('postgres.uri'),
      models,
    };
  },
};

@Module({
  imports: [SequelizeModule.forRootAsync(sequelizeModuleAsyncOptions)],
  providers: [],
  exports: [],
})
export class AppSequelizeModule {}
