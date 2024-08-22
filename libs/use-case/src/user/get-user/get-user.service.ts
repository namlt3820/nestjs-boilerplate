import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';

import { UserRepository } from '@lib/config/app-sequelize';
import { ExceptionService } from '@lib/use-case/exception';

@Injectable()
export class GetUserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly exceptionService: ExceptionService,
  ) {}

  async getUser(id: string) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      this.exceptionService.throwAppException(
        'USER.NOT_FOUND',
        HttpStatus.NOT_FOUND,
      );
    }

    return user;
  }
}
