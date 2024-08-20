import { Module } from '@nestjs/common';

import { CreateAuthorModule } from './create-author';
import { DeleteAuthorModule } from './delete-author';
import { GetAuthorModule } from './get-author';
import { GetAuthorsModule } from './get-authors';
import { UpdateAuthorModule } from './update-author';

@Module({
  imports: [
    CreateAuthorModule,
    GetAuthorsModule,
    GetAuthorModule,
    UpdateAuthorModule,
    DeleteAuthorModule,
  ],
  providers: [],
  exports: [],
})
export class AuthorModule {}
