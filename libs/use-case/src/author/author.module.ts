import { Module } from '@nestjs/common';

import { CreateAuthorModule } from './create-author';
import { GetAuthorModule } from './get-author';
import { GetAuthorsModule } from './get-authors';
import { UpdateAuthorModule } from './update-author';

@Module({
  imports: [
    CreateAuthorModule,
    GetAuthorsModule,
    GetAuthorModule,
    UpdateAuthorModule,
  ],
  providers: [],
  exports: [],
})
export class AuthorModule {}
