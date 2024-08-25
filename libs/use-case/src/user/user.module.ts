import { Module } from '@nestjs/common';

import { CreateUserModule } from './create-user';
import { DeleteUserModule } from './delete-user';
import { GetUserModule } from './get-user';
import { GetUsersModule } from './get-users';
import { UpdateUserModule } from './update-user';

@Module({
  imports: [
    CreateUserModule,
    GetUsersModule,
    GetUserModule,
    UpdateUserModule,
    DeleteUserModule,
  ],
  providers: [],
  exports: [],
})
export class UserModule {}
