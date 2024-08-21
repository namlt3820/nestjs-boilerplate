import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

import { BaseResponse, BaseResponseMongoDto } from '@lib/use-case/rest-api';

export class CreateAuthorData extends BaseResponseMongoDto {
  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  address: string;
}

export class CreateAuthorResponse extends BaseResponse {
  @ApiProperty()
  @Type(() => CreateAuthorData)
  data: CreateAuthorData;
}
