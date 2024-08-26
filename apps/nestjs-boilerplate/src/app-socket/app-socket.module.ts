import { Module } from '@nestjs/common';

import { AppSocketController } from './app-socket.controller';
import { AppSocketGateway } from './app-socket.gateway';

@Module({
  providers: [AppSocketGateway],
  controllers: [AppSocketController],
})
export class AppSocketModule {}
