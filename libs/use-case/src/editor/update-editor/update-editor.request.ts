import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateEditorData {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  name: string;
}

export class UpdateEditorRequest {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty()
  @Type(() => UpdateEditorData)
  data: UpdateEditorData;
}
