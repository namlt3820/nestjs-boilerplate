import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthorRepository } from '@lib/config/app-mongoose';
import { AuthorModel } from '@lib/config/app-mongoose';

import { GetAuthorController } from './get-author.controller';
import { GetAuthorService } from './get-author.service';

@Module({
  imports: [MongooseModule.forFeature([AuthorModel])],
  controllers: [GetAuthorController],
  providers: [GetAuthorService, AuthorRepository],
  exports: [GetAuthorService],
})
export class GetAuthorModule {}
