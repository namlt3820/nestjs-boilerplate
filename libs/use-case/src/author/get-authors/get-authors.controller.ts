import { Controller, Get, Query } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import { createResponse } from '@lib/use-case/rest-api';

import { GetAuthorsRequest } from './get-authors.request';
import { GetAuthorsResponse } from './get-authors.response';
import { GetAuthorsService } from './get-authors.service';

@Controller('authors')
export class GetAuthorsController {
  constructor(private readonly getAuthorService: GetAuthorsService) {}

  @Get()
  @ApiResponse({
    status: 201,
    description: 'The list of authors has been successfully returned.',
    type: GetAuthorsResponse,
  })
  async getAuthors(
    @Query() query: GetAuthorsRequest,
  ): Promise<GetAuthorsResponse> {
    const authors = await this.getAuthorService.getAuthors(query);

    return createResponse(GetAuthorsResponse, authors);
  }
}
