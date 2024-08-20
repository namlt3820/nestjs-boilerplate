import { Injectable } from '@nestjs/common';

import { AuthorRepository } from '@lib/config/app-mongoose';

import { GetAuthorsRequest } from './get-authors.request';

@Injectable()
export class GetAuthorsService {
  constructor(private readonly authorRepository: AuthorRepository) {}

  async getAuthors(params: GetAuthorsRequest) {
    const { first_name, last_name, address, page, limit } = params;

    return this.authorRepository.findAll(
      { first_name, last_name, address },
      { page, limit },
    );
  }
}
