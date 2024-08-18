import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ModelDefinition,
  MongooseModule,
  MongooseModuleAsyncOptions,
} from '@nestjs/mongoose';

import { Author, AuthorSchema, Book, BookSchema } from './schema';

const mongooseModuleAsyncOptions: MongooseModuleAsyncOptions = {
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    return {
      uri: configService.get<string>('mongo.uri'),
      dbName: configService.get<string>('mongo.database'),
    };
  },
};

export const BookModelDefinition: ModelDefinition = {
  name: Book.name,
  schema: BookSchema,
};

export const AuthorModelDefinition: ModelDefinition = {
  name: Author.name,
  schema: AuthorSchema,
};

const models: ModelDefinition[] = [BookModelDefinition, AuthorModelDefinition];

@Module({
  imports: [
    MongooseModule.forRootAsync(mongooseModuleAsyncOptions),
    MongooseModule.forFeature(models),
  ],
  providers: [],
  exports: [],
})
export class AppMongooseModule {}
