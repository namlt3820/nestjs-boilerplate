import { Module } from '@nestjs/common';

import { AppSocketModule } from './app-socket';
import { MicroserviceModule } from './microservice/microservice.module';

@Module({
  imports: [
    // config modules
    AppSocketModule,

    // use-case modules
    MicroserviceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
