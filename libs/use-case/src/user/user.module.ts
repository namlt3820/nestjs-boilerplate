import { Module } from '@nestjs/common';

import { CreateUserModule } from './create-user';

@Module({
  imports: [CreateUserModule],
  providers: [],
  exports: [],
})
export class UserModule {}
