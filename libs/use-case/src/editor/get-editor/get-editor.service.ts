import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';

import { EditorRepository } from '@lib/config/app-typeorm';
import { ExceptionService } from '@lib/use-case/exception';

@Injectable()
export class GetEditorService {
  constructor(
    private readonly editorRepository: EditorRepository,
    private readonly exceptionService: ExceptionService,
  ) {}

  async getEditor(id: string) {
    const editor = await this.editorRepository.findOne(id);

    if (!editor) {
      this.exceptionService.throwAppException(
        'EDITOR.NOT_FOUND',
        HttpStatus.NOT_FOUND,
      );
    }

    return editor;
  }
}
