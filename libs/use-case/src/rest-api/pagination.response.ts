import { ApiProperty } from '@nestjs/swagger';

export class MongoosePaginationResponse<T> {
  docs: T[];

  @ApiProperty()
  totalDocs: number;

  @ApiProperty()
  limit: number;

  @ApiProperty()
  totalPages: number;

  @ApiProperty()
  page: number;

  @ApiProperty()
  pagingCounter: number;

  @ApiProperty()
  hasPrevPage: boolean;

  @ApiProperty()
  hasNextPage: boolean;

  @ApiProperty()
  prevPage: null | number;

  @ApiProperty()
  nextPage: null | number;
}
