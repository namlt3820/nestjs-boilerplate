import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { UserModel, UserRepository } from '@lib/config/app-sequelize';

import { UpdateUserController } from './update-user.controller';
import { UpdateUserService } from './update-user.service';

@Module({
  imports: [SequelizeModule.forFeature([UserModel])],
  controllers: [UpdateUserController],
  providers: [UpdateUserService, UserRepository],
  exports: [UpdateUserService],
})
export class UpdateUserModule {}
