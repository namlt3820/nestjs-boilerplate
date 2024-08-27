import { Module } from '@nestjs/common';

import { AppGrpcController } from './app-grpc.controller';

@Module({
  providers: [],
  exports: [],
  controllers: [AppGrpcController],
})
export class AppGrpcModule {}
