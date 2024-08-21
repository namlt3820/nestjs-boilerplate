import { Controller, Get, Query } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import { createResponse } from '@lib/use-case/rest-api';

import { GetEditorsRequest } from './get-editors.request';
import { GetEditorsResponse } from './get-editors.response';
import { GetEditorsService } from './get-editors.service';

@Controller('editors')
export class GetEditorsController {
  constructor(private readonly getEditorsService: GetEditorsService) {}

  @Get()
  @ApiResponse({
    status: 201,
    description: 'The editors has been successfully returned.',
    type: GetEditorsResponse,
  })
  async getEditors(
    @Query() query: GetEditorsRequest,
  ): Promise<GetEditorsResponse> {
    const editors = await this.getEditorsService.getEditors(query);

    return createResponse(GetEditorsResponse, editors);
  }
}
