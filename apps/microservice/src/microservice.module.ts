import { Module } from '@nestjs/common';

import { AppConfigModule } from '@lib/config/app-config';

import { MicroserviceController } from './microservice.controller';

@Module({
  imports: [AppConfigModule],
  controllers: [MicroserviceController],
  providers: [],
})
export class MicroserviceModule {}
