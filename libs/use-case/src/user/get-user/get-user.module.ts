import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { UserModel, UserRepository } from '@lib/config/app-sequelize';

import { GetUserController } from './get-user.controller';
import { GetUserService } from './get-user.service';

@Module({
  imports: [SequelizeModule.forFeature([UserModel])],
  controllers: [GetUserController],
  providers: [GetUserService, UserRepository],
  exports: [GetUserService],
})
export class GetUserModule {}
