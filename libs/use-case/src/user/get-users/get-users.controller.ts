import { Controller, Get, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { createResponse } from '@lib/use-case/rest-api';

import { GetUsersRequest } from './get-users.request';
import { GetUsersResponse } from './get-users.response';
import { GetUsersService } from './get-users.service';

@ApiTags('Users')
@Controller('users')
export class GetUsersController {
  constructor(private readonly getUsersService: GetUsersService) {}

  @Get()
  @ApiResponse({
    status: 201,
    description: 'The users has been successfully returned.',
    type: GetUsersResponse,
  })
  async getUsers(@Query() query: GetUsersRequest): Promise<GetUsersResponse> {
    const users = await this.getUsersService.getUsers(query);

    return createResponse(GetUsersResponse, users);
  }
}
