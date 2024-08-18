import { Module } from '@nestjs/common';
import { UseCaseService } from './use-case.service';

@Module({
  providers: [UseCaseService],
  exports: [UseCaseService],
})
export class UseCaseModule {}
