import { Global, Module, Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

const clientsModuleProvider: Provider[] = [
  {
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => {
      return ClientProxyFactory.create({
        transport: Transport.REDIS,
        options: {
          host: configService.get<string>('redis.host'),
          port: configService.get<number>('redis.port'),
          password: configService.get<string>('redis.password'),
        },
      });
    },
    provide: 'REDIS_SERVICE',
  },
  {
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => {
      return ClientProxyFactory.create({
        transport: Transport.MQTT,
        options: {
          url: configService.get<string>('mqtt.url'),
        },
      });
    },
    provide: 'MQTT_SERVICE',
  },
  {
    useFactory: () => {
      return ClientProxyFactory.create({
        transport: Transport.TCP,
        options: {
          port: 3002,
        },
      });
    },
    provide: 'TCP_SERVICE',
  },
  {
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => {
      return ClientProxyFactory.create({
        transport: Transport.NATS,
        options: {
          servers: [configService.get<string>('nats.url')],
        },
      });
    },
    provide: 'NATS_SERVICE',
  },
  {
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => {
      return ClientProxyFactory.create({
        transport: Transport.RMQ,
        options: {
          urls: [configService.get<string>('rabbitmq.url')],
          queue: 'app_queue',
          queueOptions: {
            durable: true,
          },
        },
      });
    },
    provide: 'RABBITMQ_SERVICE',
  },
  {
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => {
      return ClientProxyFactory.create({
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: [configService.get<string>('kafka.url')],
          },
        },
      });
    },
    provide: 'KAFKA_SERVICE',
  },
];

@Global()
@Module({
  imports: [],
  providers: clientsModuleProvider,
  exports: clientsModuleProvider,
})
export class AppMicroserviceModule {}
