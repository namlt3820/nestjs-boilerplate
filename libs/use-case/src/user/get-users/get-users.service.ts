import { Injectable } from '@nestjs/common';
import { Attributes, WhereOptions } from 'sequelize';

import { UserModel, UserRepository } from '@lib/config/app-sequelize';

import { GetUsersRequest } from './get-users.request';

@Injectable()
export class GetUsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUsers(params: GetUsersRequest) {
    const { first_name, last_name, page, limit } = params;

    const where: WhereOptions<Attributes<UserModel>> = {};

    if (first_name) {
      where.first_name = first_name;
    }

    if (last_name) {
      where.last_name = last_name;
    }
    return this.userRepository.findAll({
      page,
      limit,
      where,
    });
  }
}
