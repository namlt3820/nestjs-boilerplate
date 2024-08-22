import { Controller, Patch } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { createResponse } from '@lib/use-case/rest-api';

import { UpdateEditorRequest } from './update-editor.request';
import { UpdateEditorResponse } from './update-editor.response';
import { UpdateEditorService } from './update-editor.service';

@ApiTags('Editors')
@Controller('editors')
export class UpdateEditorController {
  constructor(private readonly updateEditorService: UpdateEditorService) {}

  @Patch()
  @ApiResponse({
    status: 201,
    description: 'The editor has been successfully updated.',
    type: UpdateEditorResponse,
  })
  async updateEditor(@Body() body: UpdateEditorRequest) {
    const editor = await this.updateEditorService.updateEditor(body);

    return createResponse(UpdateEditorResponse, editor);
  }
}
