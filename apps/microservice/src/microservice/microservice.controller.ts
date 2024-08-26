import { Controller } from '@nestjs/common';
import {
  EventPattern,
  MessagePattern,
  Payload,
  Transport,
} from '@nestjs/microservices';

@Controller()
export class MicroserviceController {
  constructor() {}

  @MessagePattern({ cmd: 'handle_tcp_message' }, Transport.TCP)
  handleTcpMessage(data: any) {
    return data;
  }

  @EventPattern('handle_tcp_event', Transport.TCP)
  async handleTcpEvent(data: any) {
    console.log(data);
  }

  @MessagePattern({ cmd: 'handle_redis_message' }, Transport.REDIS)
  handleRedisMessage(data: any) {
    return data;
  }

  @EventPattern('handle_redis_event', Transport.REDIS)
  async handleRedisEvent(data: any) {
    console.log(data);
  }

  @MessagePattern({ cmd: 'handle_mqtt_message' }, Transport.MQTT)
  handleMqttMessage(data: any) {
    return data;
  }

  @EventPattern('handle_mqtt_event', Transport.MQTT)
  async handleMqttEvent(data: any) {
    console.log(data);
  }

  @MessagePattern({ cmd: 'handle_nats_message' }, Transport.NATS)
  handleNatsMessage(data: any) {
    return data;
  }

  @EventPattern('handle_nats_event', Transport.NATS)
  async handleNatsEvent(data: any) {
    console.log(data);
  }

  @MessagePattern({ cmd: 'handle_rabbitmq_message' }, Transport.RMQ)
  handleRabbitMqMessage(data: any) {
    return data;
  }

  @EventPattern('handle_rabbitmq_event', Transport.RMQ)
  async handleRabbitMqEvent(data: any) {
    console.log(data);
  }

  @MessagePattern('handle_kakfa_message', Transport.KAFKA)
  handleRequest(@Payload() data: any): any {
    return data;
  }

  @EventPattern('handle_kafka_event', Transport.KAFKA)
  async handleKafkaEvent(@Payload() data: any) {
    console.log(data);
  }
}
