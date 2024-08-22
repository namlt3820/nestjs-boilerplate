import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { createResponse } from '@lib/use-case/rest-api';

import { CreateUserRequest } from './create-user.request';
import { CreateUserResponse } from './create-user.response';
import { CreateUserService } from './create-user.service';

@ApiTags('Users')
@Controller('users')
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The editor has been successfully created.',
    type: CreateUserResponse,
  })
  async createEditor(
    @Body() body: CreateUserRequest,
  ): Promise<CreateUserResponse> {
    const user = await this.createUserService.createUser(body);

    return createResponse(CreateUserResponse, user);
  }
}
