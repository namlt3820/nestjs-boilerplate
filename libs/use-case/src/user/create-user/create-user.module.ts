import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { UserModel, UserRepository } from '@lib/config/app-sequelize';

import { CreateUserController } from './create-user.controller';
import { CreateUserService } from './create-user.service';

@Module({
  imports: [SequelizeModule.forFeature([UserModel])],
  controllers: [CreateUserController],
  providers: [CreateUserService, UserRepository],
  exports: [CreateUserService],
})
export class CreateUserModule {}
