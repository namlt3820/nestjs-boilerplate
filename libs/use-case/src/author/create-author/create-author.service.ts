import { Injectable } from '@nestjs/common';

import { Author, AuthorRepository } from '@lib/config/app-mongoose';

@Injectable()
export class CreateAuthorService {
  constructor(private readonly authorRepository: AuthorRepository) {}

  async createAuthor(item: Partial<Author>) {
    return this.authorRepository.create(item);
  }
}
