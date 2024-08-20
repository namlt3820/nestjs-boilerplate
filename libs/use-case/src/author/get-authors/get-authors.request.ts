import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

import { Pagination } from '@lib/use-case/rest-api';

export class GetAuthorsRequest extends Pagination {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  first_name: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  last_name: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  address: string;
}
