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

export class TypeOrmPaginationMeta {
  @ApiProperty()
  totalItems: number;

  @ApiProperty()
  itemCount: number;

  @ApiProperty()
  itemsPerPage: number;

  @ApiProperty()
  totalPages: number;

  @ApiProperty()
  currentPage: number;
}

export class TypeOrmPaginationResponse<T> {
  items: T[];

  @ApiProperty()
  meta: TypeOrmPaginationMeta;
}

export class SequelizePaginationMeta {
  @ApiProperty()
  totalItems: number;

  @ApiProperty()
  totalPages: number;

  @ApiProperty()
  page: number;

  @ApiProperty()
  limit: number;
}

export class SequelizePaginationResponse<T> {
  docs: T[];

  @ApiProperty()
  meta: SequelizePaginationMeta;
}
