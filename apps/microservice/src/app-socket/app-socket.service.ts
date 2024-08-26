import { Injectable, OnModuleInit } from '@nestjs/common';
import { Socket, io } from 'socket.io-client';

@Injectable()
export class AppSocketService implements OnModuleInit {
  private socket: Socket;

  onModuleInit() {
    this.socket = io('http://localhost:3000/backend-1');

    this.socket.on('connect', () => {
      console.log('Connected to Backend 1 WebSocket');
      // Send a message to Backend 1
      this.socket.emit('message', 'Hello from Backend 2');
    });

    this.socket.on('response', (data: string) => {
      console.log('Message from Backend 1:', data);
    });
  }
}
