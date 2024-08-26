import { Module } from '@nestjs/common';

import { AppSocketService } from './app-socket.service';

@Module({
  providers: [AppSocketService],
})
export class AppSocketModule {}
