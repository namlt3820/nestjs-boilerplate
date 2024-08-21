import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

import { BaseResponse, BaseResponsePostgresDto } from '@lib/use-case/rest-api';

export class CreateEditorData extends BaseResponsePostgresDto {
  @ApiProperty()
  name: string;
}

export class CreateEditorResponse extends BaseResponse {
  @ApiProperty()
  @Type(() => CreateEditorData)
  data: CreateEditorData;
}
