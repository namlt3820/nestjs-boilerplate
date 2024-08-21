import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

import { BaseResponse, BaseResponsePostgresDto } from '@lib/use-case/rest-api';

export class GetEditorData extends BaseResponsePostgresDto {
  @ApiProperty()
  name: string;
}

export class GetEditorResponse extends BaseResponse {
  @ApiProperty()
  @Type(() => GetEditorData)
  data: GetEditorData;
}
