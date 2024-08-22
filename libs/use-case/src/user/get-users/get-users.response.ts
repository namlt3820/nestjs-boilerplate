import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Type } from 'class-transformer';

import { BaseResponse, BaseResponsePostgresDto } from '@lib/use-case/rest-api';
import { SequelizePaginationResponse } from '@lib/use-case/rest-api/pagination.response';

export class User extends BaseResponsePostgresDto {
  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  email: string;

  @Exclude()
  password: string;
}

export class GetUsersData extends SequelizePaginationResponse<User> {
  @ApiProperty({ type: [User] })
  data: User[];
}

export class GetUsersResponse extends BaseResponse {
  @ApiProperty()
  @Type(() => GetUsersData)
  data: GetUsersData;
}
