import { Module } from '@nestjs/common';
import { ConfigModule, ConfigModuleOptions } from '@nestjs/config';
import * as Joi from 'joi';

import {
  JwtConfig,
  KafkaConfig,
  MongoConfig,
  MqttConfig,
  NatsConfig,
  PostgresConfig,
  RabbitMqConfig,
  RedisConfig,
} from './configs';

const configModuleOptions: ConfigModuleOptions = {
  isGlobal: true,
  /**
   * remove configs to load if the project doesnt need them
   */
  load: [
    MongoConfig,
    PostgresConfig,
    RedisConfig,
    JwtConfig,
    MqttConfig,
    NatsConfig,
    RabbitMqConfig,
    KafkaConfig,
  ],

  validationSchema: Joi.object({
    // mongo
    MONGO_URI: Joi.string().required(),

    // postgres
    POSTGRES_URI: Joi.string().required(),

    // language
    FALLBACK_LANGUAGE: Joi.string().required(),

    // redis
    REDIS_HOST: Joi.string().required(),
    REDIS_PORT: Joi.string().required(),
    REDIS_PASSWORD: Joi.string().required(),

    // jwt
    JWT_PUBLIC_KEY: Joi.string().required(),
    JWT_PRIVATE_KEY: Joi.string().required(),

    // mqtt
    MQTT_URL: Joi.string().required(),

    // nats
    NATS_URL: Joi.string().required(),

    // rabbitmq
    RABBITMQ_URL: Joi.string().required(),

    // kafka
    KAFKA_URL: Joi.string().required(),
  }),
};

@Module({
  imports: [ConfigModule.forRoot(configModuleOptions)],
})
export class AppConfigModule {}
