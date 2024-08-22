import { Module } from '@nestjs/common';

import { CreateUserModule } from './create-user';
import { GetUsersModule } from './get-users';

@Module({
  imports: [CreateUserModule, GetUsersModule],
  providers: [],
  exports: [],
})
export class UserModule {}
