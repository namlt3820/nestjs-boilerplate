import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { UserModel, UserRepository } from '@lib/config/app-sequelize';

const saltRounds = 10;

@Injectable()
export class CreateUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(item: Partial<UserModel>) {
    const hashedPassword = await bcrypt.hash(item.password, saltRounds);

    return this.userRepository.create({
      ...item,
      password: hashedPassword,
    });
  }
}
