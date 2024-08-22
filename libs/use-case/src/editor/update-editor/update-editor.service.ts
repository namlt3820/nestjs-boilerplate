import { HttpStatus, Injectable } from '@nestjs/common';

import { EditorRepository } from '@lib/config/app-typeorm';
import { ExceptionService } from '@lib/use-case/exception';

import { UpdateEditorRequest } from './update-editor.request';

@Injectable()
export class UpdateEditorService {
  constructor(
    private readonly editorRepository: EditorRepository,
    private readonly exceptionService: ExceptionService,
  ) {}

  async updateEditor(params: UpdateEditorRequest) {
    const { data, id } = params;
    const editor = await this.editorRepository.findOne(id);

    if (!editor) {
      this.exceptionService.throwAppException(
        'EDITOR.NOT_FOUND',
        HttpStatus.NOT_FOUND,
      );
    }

    return this.editorRepository.update(id, data);
  }
}
