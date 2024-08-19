import { Column, Table } from 'sequelize-typescript';

import { GenericModel } from './generic.model';

export const UserTableName = 'users';

@Table({
  tableName: UserTableName,
})
export class UserModel extends GenericModel {
  @Column
  email: string;

  @Column
  password: string;

  @Column
  first_name: string;

  @Column
  last_name: string;
}
