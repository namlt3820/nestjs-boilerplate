import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateAuthorData {
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

export class UpdateAuthorRequest {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty()
  @Type(() => UpdateAuthorData)
  data: UpdateAuthorData;
}
