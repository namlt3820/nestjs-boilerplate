import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';

import { EditorEntity } from './entity';

const entities: EntityClassOrSchema[] = [EditorEntity];

const typeOrmModuleAsyncOptions: TypeOrmModuleAsyncOptions = {
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    return {
      type: 'postgres',
      url: configService.get<string>('postgres.uri'),
      entities,
    };
  },
};

@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeOrmModuleAsyncOptions),
    TypeOrmModule.forFeature(entities),
  ],
  providers: [],
  exports: [],
})
export class AppTypeOrmModule {}
