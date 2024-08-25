import { Expose, Type } from 'class-transformer';

import { BaseResponse } from '@lib/use-case/rest-api';

export class LoginData {
  @Expose({
    name: 'accessToken',
  })
  access_token: string;
}

export class LoginResponse extends BaseResponse {
  @Type(() => LoginData)
  data: LoginData;
}
