import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { createResponse } from '@lib/use-case/rest-api';

import { GetEditorResponse } from './get-editor.response';
import { GetEditorService } from './get-editor.service';

@ApiTags('Editors')
@Controller('editors')
export class GetEditorController {
  constructor(private readonly getEditorService: GetEditorService) {}

  @Get(':id')
  @ApiResponse({
    status: 201,
    description: 'The editor data has been successfully returned.',
    type: GetEditorResponse,
  })
  async getEditor(@Param('id') id: string): Promise<GetEditorResponse> {
    const editor = await this.getEditorService.getEditor(id);

    return createResponse(GetEditorResponse, editor);
  }
}
