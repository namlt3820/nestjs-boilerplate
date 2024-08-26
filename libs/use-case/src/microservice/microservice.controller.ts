import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { Observable, timeout } from 'rxjs';

const payload = { hello: 'world' };

@ApiTags('Microservices')
@Controller('microservice')
export class MicroserviceController {
  constructor(
    @Inject('TCP_SERVICE') private tcpClient: ClientProxy,
    @Inject('REDIS_SERVICE') private redisClient: ClientProxy,
    @Inject('MQTT_SERVICE') private mqttClient: ClientProxy,
    @Inject('NATS_SERVICE') private natsClient: ClientProxy,
  ) {}

  @Get('tcp-message')
  sendTcpMessage(): Observable<any> {
    const pattern = { cmd: 'handle_tcp_message' };
    return this.tcpClient.send(pattern, payload).pipe(timeout(5000));
  }

  @Get('tcp-event')
  sendTcpEvent() {
    this.tcpClient.emit('handle_tcp_event', payload);
  }

  @Get('redis-message')
  sendRedisMessage(): Observable<any> {
    const pattern = { cmd: 'handle_redis_message' };
    return this.redisClient.send(pattern, payload).pipe(timeout(5000));
  }

  @Get('redis-event')
  sendRedisEvent() {
    this.redisClient.emit('handle_redis_event', payload);
  }

  @Get('mqtt-message')
  sendMqttMessage(): Observable<any> {
    const pattern = { cmd: 'handle_mqtt_message' };
    return this.mqttClient.send(pattern, payload).pipe(timeout(5000));
  }

  @Get('mqtt-event')
  sendMqttEvent() {
    this.mqttClient.emit('handle_mqtt_event', payload);
  }

  @Get('nats-message')
  sendNatsMessage(): Observable<any> {
    const pattern = { cmd: 'handle_nats_message' };
    return this.natsClient.send(pattern, payload).pipe(timeout(5000));
  }

  @Get('nats-event')
  sendNatsEvent() {
    this.natsClient.emit('handle_nats_event', payload);
  }
}
