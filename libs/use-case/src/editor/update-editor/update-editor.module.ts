import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EditorEntity, EditorRepository } from '@lib/config/app-typeorm';

import { UpdateEditorController } from './update-editor.controller';
import { UpdateEditorService } from './update-editor.service';

@Module({
  imports: [TypeOrmModule.forFeature([EditorEntity])],
  controllers: [UpdateEditorController],
  providers: [UpdateEditorService, EditorRepository],
  exports: [UpdateEditorService],
})
export class UpdateEditorModule {}
