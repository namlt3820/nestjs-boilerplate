import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // tcp
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      port: 3002,
    },
  });

  // redis
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.REDIS,
    options: {
      host: configService.get<string>('redis.host'),
      port: configService.get<number>('redis.port'),
      password: configService.get<string>('redis.password'),
    },
  });

  // mqtt
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.MQTT,
    options: {
      url: configService.get<string>('mqtt.url'),
    },
  });

  await app.startAllMicroservices();
  await app.listen(3001);
}
bootstrap();
