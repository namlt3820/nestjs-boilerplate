import { Controller, Delete, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { createResponse } from '@lib/use-case/rest-api';

import { DeleteUserResponse } from './delete-user.response';
import { DeleteUserService } from './delete-user.service';

@ApiTags('Users')
@Controller('users')
export class DeleteUserController {
  constructor(private readonly deleteUserService: DeleteUserService) {}

  @Delete(':id')
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully deleted.',
    type: DeleteUserResponse,
  })
  async deleteEditor(@Param('id') id: string): Promise<DeleteUserResponse> {
    const user = await this.deleteUserService.deleteUser(id);

    return createResponse(DeleteUserResponse, user);
  }
}
