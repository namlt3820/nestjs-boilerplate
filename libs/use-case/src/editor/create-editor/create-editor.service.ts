import { Injectable } from '@nestjs/common';

import { EditorEntity, EditorRepository } from '@lib/config/app-typeorm';

@Injectable()
export class CreateEditorService {
  constructor(private readonly editorRepository: EditorRepository) {}

  async createEditor(item: Partial<EditorEntity>) {
    return this.editorRepository.create(item);
  }
}
