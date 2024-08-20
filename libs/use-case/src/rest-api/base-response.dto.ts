import { ApiProperty } from '@nestjs/swagger';

export class BaseResponse {
  @ApiProperty()
  exception_code: number;

  data: any;
}
