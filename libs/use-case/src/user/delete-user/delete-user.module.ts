import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { UserModel, UserRepository } from '@lib/config/app-sequelize';

import { DeleteUserController } from './delete-user.controller';
import { DeleteUserService } from './delete-user.service';

@Module({
  imports: [SequelizeModule.forFeature([UserModel])],
  controllers: [DeleteUserController],
  providers: [DeleteUserService, UserRepository],
  exports: [DeleteUserService],
})
export class DeleteUserModule {}
