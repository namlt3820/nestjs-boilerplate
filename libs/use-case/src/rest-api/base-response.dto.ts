import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class BaseResponseDto {
  @ApiProperty()
  created_at: number;

  @ApiProperty()
  updated_at: number;

  @ApiPropertyOptional()
  deleted_at: number;
}
