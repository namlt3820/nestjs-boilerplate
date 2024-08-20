import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthorRepository } from '@lib/config/app-mongoose';
import { AuthorModel } from '@lib/config/app-mongoose';

import { UpdateAuthorController } from './update-author.controller';
import { UpdateAuthorService } from './update-author.service';

@Module({
  imports: [MongooseModule.forFeature([AuthorModel])],
  controllers: [UpdateAuthorController],
  providers: [UpdateAuthorService, AuthorRepository],
  exports: [UpdateAuthorService],
})
export class UpdateAuthorModule {}
