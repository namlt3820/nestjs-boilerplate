import { HttpStatus, Injectable } from '@nestjs/common';

import { AuthorRepository } from '@lib/config/app-mongoose';
import { ExceptionService } from '@lib/use-case/exception';

import { UpdateAuthorRequest } from './update-author.request';

@Injectable()
export class UpdateAuthorService {
  constructor(
    private readonly authorRepository: AuthorRepository,
    private readonly exceptionService: ExceptionService,
  ) {}

  async updateAuthor(params: UpdateAuthorRequest) {
    const { data, id } = params;
    const author = await this.authorRepository.findById(id);

    if (!author) {
      this.exceptionService.throwAppException(
        'AUTHOR.NOT_FOUND',
        HttpStatus.NOT_FOUND,
      );
    }

    return this.authorRepository.update(id, data);
  }
}
