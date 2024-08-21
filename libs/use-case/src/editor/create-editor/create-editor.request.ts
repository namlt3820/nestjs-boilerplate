import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEditorRequest {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
}
