import { Injectable } from '@nestjs/common';

import { AuthorRepository } from '@lib/config/app-mongoose';

@Injectable()
export class GetAuthorService {
  constructor(private readonly authorRepository: AuthorRepository) {}

  async getAuthor(id: string) {
    return this.authorRepository.findById(id);
  }
}
