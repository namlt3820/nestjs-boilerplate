import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

import { BaseResponse, BaseResponseMongoDto } from '@lib/use-case/rest-api';
import { MongoosePaginationResponse } from '@lib/use-case/rest-api/pagination.response';

export class Author extends BaseResponseMongoDto {
  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  address: string;
}
export class GetAuthorsData extends MongoosePaginationResponse<Author> {
  @ApiProperty({ type: [Author] })
  docs: Author[];
}

export class GetAuthorsResponse extends BaseResponse {
  @ApiProperty()
  @Type(() => GetAuthorsData)
  data: GetAuthorsData;
}
