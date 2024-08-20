import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

import { BaseResponse, BaseResponseDto } from '@lib/use-case/rest-api';

export class CreateAuthorData extends BaseResponseDto {
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
