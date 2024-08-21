import { Module } from '@nestjs/common';

import { CreateEditorModule } from './create-editor';
import { GetEditorModule } from './get-editor';
import { GetEditorsModule } from './get-editors';

@Module({
  imports: [CreateEditorModule, GetEditorsModule, GetEditorModule],
  providers: [],
  exports: [],
})
export class EditorModule {}
