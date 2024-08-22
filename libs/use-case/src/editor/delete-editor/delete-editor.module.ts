import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EditorEntity, EditorRepository } from '@lib/config/app-typeorm';

import { DeleteEditorController } from './delete-editor.controller';
import { DeleteEditorService } from './delete-editor.service';

@Module({
  imports: [TypeOrmModule.forFeature([EditorEntity])],
  controllers: [DeleteEditorController],
  providers: [DeleteEditorService, EditorRepository],
  exports: [DeleteEditorService],
})
export class DeleteEditorModule {}
