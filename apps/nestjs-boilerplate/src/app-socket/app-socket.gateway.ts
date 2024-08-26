import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ namespace: 'backend-1' })
export class AppSocketGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): void {
    console.log('Message received:', message);
    this.server.emit('response', 'Message received by backend-1');
  }

  sendMessage() {
    this.server.emit('response', 'Hello from Backend 1, triggered by API call');
  }
}
