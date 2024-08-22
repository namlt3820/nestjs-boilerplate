import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Type } from 'class-transformer';

import { BaseResponse, BaseResponsePostgresDto } from '@lib/use-case/rest-api';

export class GetUserData extends BaseResponsePostgresDto {
  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  email: string;

  @Exclude()
  password: string;
}

export class GetUserResponse extends BaseResponse {
  @ApiProperty()
  @Type(() => GetUserData)
  data: GetUserData;
}
