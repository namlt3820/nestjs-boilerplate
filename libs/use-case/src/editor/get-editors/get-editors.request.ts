import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

import { Pagination } from '@lib/use-case/rest-api';

export class GetEditorsRequest extends Pagination {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  name: string;
}
