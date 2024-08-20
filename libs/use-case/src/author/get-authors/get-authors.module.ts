import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthorRepository } from '@lib/config/app-mongoose';
import { AuthorModel } from '@lib/config/app-mongoose';

import { GetAuthorsController } from './get-authors.controller';
import { GetAuthorsService } from './get-authors.service';

@Module({
  imports: [MongooseModule.forFeature([AuthorModel])],
  controllers: [GetAuthorsController],
  providers: [GetAuthorsService, AuthorRepository],
  exports: [GetAuthorsService],
})
export class GetAuthorsModule {}
