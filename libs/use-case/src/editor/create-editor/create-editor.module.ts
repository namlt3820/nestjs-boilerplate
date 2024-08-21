import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EditorEntity, EditorRepository } from '@lib/config/app-typeorm';

import { CreateEditorController } from './create-editor.controller';
import { CreateEditorService } from './create-editor.service';

@Module({
  imports: [TypeOrmModule.forFeature([EditorEntity])],
  controllers: [CreateEditorController],
  providers: [CreateEditorService, EditorRepository],
  exports: [CreateEditorService],
})
export class CreateEditorModule {}
