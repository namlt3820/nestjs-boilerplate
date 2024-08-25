import { Controller, Patch } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { createResponse } from '@lib/use-case/rest-api';

import { UpdateUserRequest } from './update-user.request';
import { UpdateUserResponse } from './update-user.response';
import { UpdateUserService } from './update-user.service';

@ApiTags('Users')
@Controller('users')
export class UpdateUserController {
  constructor(private readonly updateUserService: UpdateUserService) {}

  @Patch()
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully updated.',
    type: UpdateUserResponse,
  })
  async updateUser(@Body() body: UpdateUserRequest) {
    const user = await this.updateUserService.updateUser(body);

    return createResponse(UpdateUserResponse, user);
  }
}
