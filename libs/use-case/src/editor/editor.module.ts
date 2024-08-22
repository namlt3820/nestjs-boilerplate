import { Module } from '@nestjs/common';

import { CreateEditorModule } from './create-editor';
import { GetEditorModule } from './get-editor';
import { GetEditorsModule } from './get-editors';
import { UpdateEditorModule } from './update-editor/update-editor.module';

@Module({
  imports: [
    CreateEditorModule,
    GetEditorsModule,
    GetEditorModule,
    UpdateEditorModule,
  ],
  providers: [],
  exports: [],
})
export class EditorModule {}
