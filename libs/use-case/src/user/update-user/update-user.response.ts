import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Type } from 'class-transformer';

import { BaseResponse, BaseResponsePostgresDto } from '@lib/use-case/rest-api';

export class UpdatedUserData extends BaseResponsePostgresDto {
  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  email: string;

  @Exclude()
  password: string;
}

export class UpdateUserResponse extends BaseResponse {
  @ApiProperty()
  @Type(() => UpdatedUserData)
  data: UpdatedUserData;
}
