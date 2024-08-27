import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

import { Hero, HeroById } from '@lib/config/app-grpc';

@Controller()
export class AppGrpcController {
  private readonly items: Hero[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Doe' },
  ];

  @GrpcMethod('hero.HeroesService', 'FindOne')
  FindOne(data: HeroById): Hero {
    const hero = this.items.find(({ id }) => id === data.id);
    return hero || { id: 0, name: 'Not Found' };
  }
}
