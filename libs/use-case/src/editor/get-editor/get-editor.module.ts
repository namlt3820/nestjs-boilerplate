import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EditorEntity, EditorRepository } from '@lib/config/app-typeorm';

import { GetEditorController } from './get-editor.controller';
import { GetEditorService } from './get-editor.service';

@Module({
  imports: [TypeOrmModule.forFeature([EditorEntity])],
  controllers: [GetEditorController],
  providers: [GetEditorService, EditorRepository],
  exports: [GetEditorService],
})
export class GetEditorModule {}
