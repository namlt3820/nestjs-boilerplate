import { Controller, Delete, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { createResponse } from '@lib/use-case/rest-api';

import { DeleteEditorResponse } from './delete-editor.response';
import { DeleteEditorService } from './delete-editor.service';

@ApiTags('Editors')
@Controller('editors')
export class DeleteEditorController {
  constructor(private readonly deleteEditorService: DeleteEditorService) {}

  @Delete(':id')
  @ApiResponse({
    status: 201,
    description: 'The editor has been successfully deleted.',
    type: DeleteEditorResponse,
  })
  async deleteEditor(@Param('id') id: string): Promise<DeleteEditorResponse> {
    const editor = await this.deleteEditorService.deleteEditor(id);

    return createResponse(DeleteEditorResponse, editor);
  }
}
