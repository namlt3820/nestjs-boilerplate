import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthorRepository } from '@lib/config/app-mongoose';
import { AuthorModel } from '@lib/config/app-mongoose';

import { DeleteAuthorController } from './delete-author.controller';
import { DeleteAuthorService } from './delete-author.service';

@Module({
  imports: [MongooseModule.forFeature([AuthorModel])],
  controllers: [DeleteAuthorController],
  providers: [DeleteAuthorService, AuthorRepository],
  exports: [DeleteAuthorService],
})
export class DeleteAuthorModule {}
