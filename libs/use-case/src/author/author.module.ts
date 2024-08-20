import { Module } from '@nestjs/common';

import { CreateAuthorModule } from './create-author';
import { GetAuthorModule } from './get-author';
import { GetAuthorsModule } from './get-authors';

@Module({
  imports: [CreateAuthorModule, GetAuthorsModule, GetAuthorModule],
  providers: [],
  exports: [],
})
export class AuthorModule {}
