import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

import { BaseResponse, BaseResponseMongoDto } from '@lib/use-case/rest-api';

export class UpdatedAuthorData extends BaseResponseMongoDto {
  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  address: string;
}

export class UpdateAuthorResponse extends BaseResponse {
  @ApiProperty()
  @Type(() => UpdatedAuthorData)
  data: UpdatedAuthorData;
}
