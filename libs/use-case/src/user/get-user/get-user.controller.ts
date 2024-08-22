import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { createResponse } from '@lib/use-case/rest-api';

import { GetUserResponse } from './get-user.response';
import { GetUserService } from './get-user.service';

@ApiTags('Users')
@Controller('users')
export class GetUserController {
  constructor(private readonly getUserService: GetUserService) {}

  @Get(':id')
  @ApiResponse({
    status: 201,
    description: 'The user data has been successfully returned.',
    type: GetUserResponse,
  })
  async getUser(@Param('id') id: string): Promise<GetUserResponse> {
    const editor = await this.getUserService.getUser(id);

    return createResponse(GetUserResponse, editor);
  }
}
