import { Global, Module } from '@nestjs/common';

import { MicroserviceController } from './microservice.controller';

@Global()
@Module({
  imports: [],
  providers: [],
  exports: [],
  controllers: [MicroserviceController],
})
export class MicroserviceModule {}
