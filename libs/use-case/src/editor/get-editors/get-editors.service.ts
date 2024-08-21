import { Injectable } from '@nestjs/common';

import { EditorRepository } from '@lib/config/app-typeorm';

import { GetEditorsRequest } from './get-editors.request';

@Injectable()
export class GetEditorsService {
  constructor(private readonly editorRepository: EditorRepository) {}

  async getEditors(params: GetEditorsRequest) {
    return this.editorRepository.paginate(params);
  }
}
