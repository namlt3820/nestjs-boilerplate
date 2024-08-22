import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

import { BaseResponse, BaseResponsePostgresDto } from '@lib/use-case/rest-api';

export class DeletedEditorData extends BaseResponsePostgresDto {
  @ApiProperty()
  name: string;
}

export class DeleteEditorResponse extends BaseResponse {
  @ApiProperty()
  @Type(() => DeletedEditorData)
  data: DeletedEditorData;
}
