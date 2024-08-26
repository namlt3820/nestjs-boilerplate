import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AppSocketGateway } from './app-socket.gateway';

@ApiTags('Microservices')
@Controller('socket')
export class AppSocketController {
  constructor(private readonly appSocketGateway: AppSocketGateway) {}

  @Get('send-message')
  sendMessage() {
    this.appSocketGateway.sendMessage();
    return 'Message sent to WebSocket client!';
  }
}
