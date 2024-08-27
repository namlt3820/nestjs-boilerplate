import { Module } from '@nestjs/common';

import { AppGrpcModule } from './app-grpc';
import { AppSocketModule } from './app-socket';
import { MicroserviceModule } from './microservice';

@Module({
  imports: [
    // config modules
    AppSocketModule,
    AppGrpcModule,

    // use-case modules
    MicroserviceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
