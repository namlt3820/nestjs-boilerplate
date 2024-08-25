import { HttpStatus, Injectable } from '@nestjs/common';

import { UserRepository } from '@lib/config/app-sequelize';
import { ExceptionService } from '@lib/use-case/exception';

@Injectable()
export class DeleteUserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly exceptionService: ExceptionService,
  ) {}

  async deleteUser(id: string) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      this.exceptionService.throwAppException(
        'USER.NOT_FOUND',
        HttpStatus.NOT_FOUND,
      );
    }

    const result = await this.userRepository.delete(id);

    if (result > 0) {
      const deletedUser = await this.userRepository.findById(id, {
        paranoid: false,
      });

      return deletedUser;
    }
  }
}
