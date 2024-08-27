import {
  Controller,
  Get,
  Inject,
  OnModuleInit,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

import { Hero, HeroById } from './interfaces';

interface HeroesService {
  findOne(data: HeroById): Observable<Hero>;
}

@Controller('grpc')
export class AppGrpcController implements OnModuleInit {
  private heroesService: HeroesService;

  constructor(@Inject('GRPC_SERVICE') private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.heroesService = this.client.getService<HeroesService>('HeroesService');
  }

  @Get('/heroes/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.heroesService.findOne({ id });
  }
}
