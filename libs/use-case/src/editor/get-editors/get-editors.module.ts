import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EditorEntity, EditorRepository } from '@lib/config/app-typeorm';

import { GetEditorsController } from './get-editors.controller';
import { GetEditorsService } from './get-editors.service';

@Module({
  imports: [TypeOrmModule.forFeature([EditorEntity])],
  controllers: [GetEditorsController],
  providers: [GetEditorsService, EditorRepository],
  exports: [GetEditorsService],
})
export class GetEditorsModule {}
