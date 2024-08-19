import {
  Attributes,
  FindAndCountOptions,
  FindOptions,
  Sequelize,
  Transaction,
  WhereOptions,
} from 'sequelize';
import { Model, ModelCtor } from 'sequelize-typescript';
import { MakeNullishOptional } from 'sequelize/types/utils';

export class GenericRepository<T extends Model> {
  private model: ModelCtor<T>;
  private sequelize: Sequelize;

  constructor(model: ModelCtor<T>, sequelize: Sequelize) {
    this.model = model;
    this.sequelize = sequelize;
  }

  async findAll(
    options: FindAndCountOptions<Attributes<T>> & {
      page?: number;
      pageSize?: number;
    },
    transaction?: Transaction,
  ): Promise<{ rows: T[]; count: number }> {
    const { page = 1, pageSize = 10, ...queryOptions } = options;

    const paginatedOptions: FindOptions<Attributes<T>> = {
      ...queryOptions,
      limit: pageSize,
      offset: (page - 1) * pageSize,
    };

    return this.model.findAndCountAll({
      ...paginatedOptions,
      transaction,
    });
  }

  async findById(id: string, transaction?: Transaction): Promise<T | null> {
    return this.model.findByPk(id, { transaction });
  }

  async create(
    item: MakeNullishOptional<Attributes<T>>,
    transaction?: Transaction,
  ): Promise<T> {
    return this.model.create<T>(item, { transaction });
  }

  async update(
    id: string,
    updates: Partial<Attributes<T>>,
    transaction?: Transaction,
  ): Promise<[number, T[]]> {
    return this.model.update(updates, {
      where: { id } as WhereOptions<T>,
      returning: true,
      transaction,
    });
  }

  async delete(id: string, transaction?: Transaction): Promise<number> {
    return this.model.destroy({
      where: { id } as WhereOptions<T>,
      transaction,
    });
  }
}
