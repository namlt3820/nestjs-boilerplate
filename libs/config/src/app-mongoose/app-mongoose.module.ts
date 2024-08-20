import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ModelDefinition,
  MongooseModule,
  MongooseModuleAsyncOptions,
} from '@nestjs/mongoose';

import { AuthorSchema, BookSchema } from './schema';

const mongooseModuleAsyncOptions: MongooseModuleAsyncOptions = {
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    return {
      uri: configService.get<string>('mongo.uri'),
      dbName: configService.get<string>('mongo.dbName'),
    };
  },
};

export const BookModel: ModelDefinition = {
  name: 'books',
  schema: BookSchema,
  collection: 'books',
};

export const AuthorModel: ModelDefinition = {
  name: 'authors',
  schema: AuthorSchema,
  collection: 'authors',
};

@Module({
  imports: [MongooseModule.forRootAsync(mongooseModuleAsyncOptions)],
  providers: [],
  exports: [],
})
export class AppMongooseModule {}
