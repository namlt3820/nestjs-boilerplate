import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { createResponse } from '@lib/use-case/rest-api';

import { GetAuthorResponse } from './get-author.response';
import { GetAuthorService } from './get-author.service';

@ApiTags('Authors')
@Controller('authors')
export class GetAuthorController {
  constructor(private readonly getAuthorService: GetAuthorService) {}

  @Get(':id')
  @ApiResponse({
    status: 201,
    description: 'The author data has been successfully returned.',
    type: GetAuthorResponse,
  })
  async getAuthor(@Param('id') id: string): Promise<GetAuthorResponse> {
    const author = await this.getAuthorService.getAuthor(id);

    return createResponse(GetAuthorResponse, author);
  }
}
