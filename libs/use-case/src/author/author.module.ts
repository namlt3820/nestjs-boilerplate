import { Module } from '@nestjs/common';

import { CreateAuthorModule } from './create-author';
import { GetAuthorsModule } from './get-authors';

@Module({
  imports: [CreateAuthorModule, GetAuthorsModule],
  providers: [],
  exports: [],
})
export class AuthorModule {}
