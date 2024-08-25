import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Type } from 'class-transformer';

import { BaseResponse, BaseResponseMongoDto } from '@lib/use-case/rest-api';

export class GetProfileData extends BaseResponseMongoDto {
  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  address: string;

  @Exclude()
  password: string;
}

export class GetProfileResponse extends BaseResponse {
  @ApiProperty()
  @Type(() => GetProfileData)
  data: GetProfileData;
}
