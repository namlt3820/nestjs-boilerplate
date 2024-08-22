import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

import { BaseResponse, BaseResponsePostgresDto } from '@lib/use-case/rest-api';

export class UpdatedEditorData extends BaseResponsePostgresDto {
  @ApiProperty()
  name: string;
}

export class UpdateEditorResponse extends BaseResponse {
  @ApiProperty()
  @Type(() => UpdatedEditorData)
  data: UpdatedEditorData;
}
