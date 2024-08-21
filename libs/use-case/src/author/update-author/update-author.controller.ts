import { Controller, Patch } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { createResponse } from '@lib/use-case/rest-api';

import { UpdateAuthorRequest } from './update-author.request';
import { UpdateAuthorResponse } from './update-author.response';
import { UpdateAuthorService } from './update-author.service';

@ApiTags('Authors')
@Controller('authors')
export class UpdateAuthorController {
  constructor(private readonly updateAuthorService: UpdateAuthorService) {}

  @Patch()
  @ApiResponse({
    status: 201,
    description: 'The author has been successfully updated.',
    type: UpdateAuthorResponse,
  })
  async createAuthor(
    @Body() body: UpdateAuthorRequest,
  ): Promise<UpdateAuthorResponse> {
    const author = await this.updateAuthorService.updateAuthor(body);

    return createResponse(UpdateAuthorResponse, author);
  }
}
