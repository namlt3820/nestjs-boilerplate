import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { UserModel, UserRepository } from '@lib/config/app-sequelize';

import { GetUsersController } from './get-users.controller';
import { GetUsersService } from './get-users.service';

@Module({
  imports: [SequelizeModule.forFeature([UserModel])],
  controllers: [GetUsersController],
  providers: [GetUsersService, UserRepository],
  exports: [GetUsersService],
})
export class GetUsersModule {}
