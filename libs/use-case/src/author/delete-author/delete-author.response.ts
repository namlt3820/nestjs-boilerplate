import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

import { BaseResponse, BaseResponseDto } from '@lib/use-case/rest-api';

export class DeletedAuthorData extends BaseResponseDto {
  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  address: string;
}

export class DeleteAuthorResponse extends BaseResponse {
  @ApiProperty()
  @Type(() => DeletedAuthorData)
  data: DeletedAuthorData;
}
