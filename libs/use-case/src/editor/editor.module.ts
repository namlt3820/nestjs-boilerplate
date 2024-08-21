import { Module } from '@nestjs/common';

import { CreateEditorModule } from './create-editor';

@Module({
  imports: [CreateEditorModule],
  providers: [],
  exports: [],
})
export class EditorModule {}
