import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ModelCtor, Sequelize } from 'sequelize-typescript';

import { UserModel } from '../model';
import { GenericRepository } from './generic.repository';

@Injectable()
export class UserRepository extends GenericRepository<UserModel> {
  constructor(
    @InjectModel(UserModel) model: ModelCtor<UserModel>,
    sequelize: Sequelize,
  ) {
    super(model, sequelize);
  }

  async getByEmail(email: string) {
    const record = await this.model.findOne({
      where: { email },
    });

    return record?.dataValues || null;
  }
}
