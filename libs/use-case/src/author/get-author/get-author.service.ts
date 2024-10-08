import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';

import { AuthorRepository } from '@lib/config/app-mongoose';
import { ExceptionService } from '@lib/use-case/exception';

@Injectable()
export class GetAuthorService {
  constructor(
    private readonly authorRepository: AuthorRepository,
    private readonly exceptionService: ExceptionService,
  ) {}

  async getAuthor(id: string) {
    const author = await this.authorRepository.findById(id);

    if (!author) {
      this.exceptionService.throwAppException(
        'AUTHOR.NOT_FOUND',
        HttpStatus.NOT_FOUND,
      );
    }

    return author;
  }
}
