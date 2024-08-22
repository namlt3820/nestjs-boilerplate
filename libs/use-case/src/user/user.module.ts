import { Module } from '@nestjs/common';

import { CreateUserModule } from './create-user';
import { GetUserModule } from './get-user';
import { GetUsersModule } from './get-users';

@Module({
  imports: [CreateUserModule, GetUsersModule, GetUserModule],
  providers: [],
  exports: [],
})
export class UserModule {}
