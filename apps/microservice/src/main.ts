import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { MicroserviceModule } from './microservice.module';

async function bootstrap() {
  const app = await NestFactory.create(MicroserviceModule);
  const configService = app.get(ConfigService);

  // tcp
  const microserviceTcp = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      port: 3002,
    },
  });

  // redis
  const microserviceRedis = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.REDIS,
    options: {
      host: configService.get<string>('redis.host'),
      port: configService.get<number>('redis.port'),
      password: configService.get<string>('redis.password'),
    },
  });

  // mqtt
  const microserviceMqtt = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.MQTT,
    options: {
      url: configService.get<string>('mqtt.url'),
    },
  });

  await app.startAllMicroservices();
  await app.listen(3001);
}
bootstrap();
