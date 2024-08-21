import { Module } from '@nestjs/common';

import { CreateEditorModule } from './create-editor';
import { GetEditorsModule } from './get-editors';

@Module({
  imports: [CreateEditorModule, GetEditorsModule],
  providers: [],
  exports: [],
})
export class EditorModule {}
