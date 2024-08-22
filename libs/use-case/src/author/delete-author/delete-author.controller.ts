import { Controller, Delete, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { createResponse } from '@lib/use-case/rest-api';

import { DeleteAuthorResponse } from './delete-author.response';
import { DeleteAuthorService } from './delete-author.service';

@ApiTags('Authors')
@Controller('authors')
export class DeleteAuthorController {
  constructor(private readonly deleteAuthorService: DeleteAuthorService) {}

  @Delete(':id')
  @ApiResponse({
    status: 201,
    description: 'The author has been successfully deleted.',
    type: DeleteAuthorResponse,
  })
  async deleteAuthor(@Param('id') id: string): Promise<DeleteAuthorResponse> {
    const author = await this.deleteAuthorService.deleteAuthor(id);

    return createResponse(DeleteAuthorResponse, author);
  }
}
