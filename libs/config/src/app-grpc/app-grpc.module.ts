import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

import { AppGrpcController } from './app-grpc.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'GRPC_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'hero',
          protoPath: join(__dirname, '../../libs/config/app-grpc.proto'),
          url: 'localhost:3003',
        },
      },
    ]),
  ],
  controllers: [AppGrpcController],
})
export class AppGrpcModule {}
