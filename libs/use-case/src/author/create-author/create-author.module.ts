import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthorRepository } from '@lib/config/app-mongoose';
import { AuthorModel } from '@lib/config/app-mongoose';

import { CreateAuthorController } from './create-author.controller';
import { CreateAuthorService } from './create-author.service';

@Module({
  imports: [MongooseModule.forFeature([AuthorModel])],
  controllers: [CreateAuthorController],
  providers: [CreateAuthorService, AuthorRepository],
  exports: [CreateAuthorService],
})
export class CreateAuthorModule {}
