import { HttpStatus, Injectable } from '@nestjs/common';

import { UserRepository } from '@lib/config/app-sequelize';
import { ExceptionService } from '@lib/use-case/exception';

import { UpdateUserRequest } from './update-user.request';

@Injectable()
export class UpdateUserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly exceptionService: ExceptionService,
  ) {}

  async updateUser(params: UpdateUserRequest) {
    const { data, id } = params;
    const user = await this.userRepository.findById(id);

    if (!user) {
      this.exceptionService.throwAppException(
        'USER.NOT_FOUND',
        HttpStatus.NOT_FOUND,
      );
    }

    return this.userRepository.update(id, data);
  }
}
