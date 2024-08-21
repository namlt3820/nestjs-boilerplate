import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import { createResponse } from '@lib/use-case/rest-api';

import { CreateEditorRequest } from './create-editor.request';
import { CreateEditorResponse } from './create-editor.response';
import { CreateEditorService } from './create-editor.service';

@Controller('editors')
export class CreateEditorController {
  constructor(private readonly createEditorService: CreateEditorService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The editor has been successfully created.',
    type: CreateEditorResponse,
  })
  async createEditor(
    @Body() body: CreateEditorRequest,
  ): Promise<CreateEditorResponse> {
    const editor = await this.createEditorService.createEditor(body);

    return createResponse(CreateEditorResponse, editor);
  }
}
