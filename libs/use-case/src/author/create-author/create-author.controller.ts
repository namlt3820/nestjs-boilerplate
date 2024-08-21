import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { createResponse } from '@lib/use-case/rest-api';

import { CreateAuthorRequest } from './create-author.request';
import { CreateAuthorResponse } from './create-author.response';
import { CreateAuthorService } from './create-author.service';

@ApiTags('Authors')
@Controller('authors')
export class CreateAuthorController {
  constructor(private readonly createAuthorService: CreateAuthorService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The author has been successfully created.',
    type: CreateAuthorResponse,
  })
  async createAuthor(
    @Body() body: CreateAuthorRequest,
  ): Promise<CreateAuthorResponse> {
    const author = await this.createAuthorService.createAuthor(body);

    return createResponse(CreateAuthorResponse, author);
  }
}
