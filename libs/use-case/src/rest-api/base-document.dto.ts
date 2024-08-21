import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class BaseResponseMongoDto {
  @ApiProperty()
  _id: string;

  @ApiPropertyOptional()
  id: string;

  @ApiProperty()
  created_at: number;

  @ApiProperty()
  updated_at: number;

  @ApiPropertyOptional()
  deleted_at: number;
}

export class BaseResponsePostgresDto {
  @ApiProperty()
  id: string;

  @ApiProperty({ type: 'string' })
  created_at: Date;

  @ApiProperty({ type: 'string' })
  updated_at: Date;

  @ApiPropertyOptional({ type: 'string' })
  deleted_at: Date;
}
