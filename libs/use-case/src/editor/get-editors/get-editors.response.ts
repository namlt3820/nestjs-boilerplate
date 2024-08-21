import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

import { BaseResponse, BaseResponsePostgresDto } from '@lib/use-case/rest-api';
import { TypeOrmPaginationResponse } from '@lib/use-case/rest-api/pagination.response';

export class Editor extends BaseResponsePostgresDto {
  @ApiProperty()
  name: string;
}

export class GetEditorsData extends TypeOrmPaginationResponse<Editor> {
  @ApiProperty({ type: [Editor] })
  docs: Editor[];
}

export class GetEditorsResponse extends BaseResponse {
  @ApiProperty()
  @Type(() => GetEditorsData)
  data: GetEditorsData;
}
