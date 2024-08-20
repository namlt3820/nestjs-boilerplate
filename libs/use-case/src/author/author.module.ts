import { Module } from '@nestjs/common';

import { CreateAuthorModule } from './create-author';

@Module({
  imports: [CreateAuthorModule],
  providers: [],
  exports: [],
})
export class AuthorModule {}
