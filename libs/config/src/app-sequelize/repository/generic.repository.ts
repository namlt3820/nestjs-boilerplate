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
  protected model: ModelCtor<T>;
  private sequelize: Sequelize;

  constructor(model: ModelCtor<T>, sequelize: Sequelize) {
    this.model = model;
    this.sequelize = sequelize;
  }

  async findAll(
    options: FindAndCountOptions<Attributes<T>> & {
      page?: number;
      limit?: number;
    },
    transaction?: Transaction,
  ): Promise<{
    docs: T[];
    meta: {
      totalItems: number;
      page: number;
      limit: number;
      totalPages: number;
    };
  }> {
    const { page = 1, limit = 10, ...queryOptions } = options;

    const paginatedOptions: FindOptions<Attributes<T>> = {
      ...queryOptions,
      limit: limit,
      offset: (page - 1) * limit,
    };

    const { count, rows } = await this.model.findAndCountAll({
      ...paginatedOptions,
      transaction,
    });

    return {
      docs: rows.map(({ dataValues }) => dataValues),
      meta: {
        totalItems: count,
        totalPages: Math.ceil(count / limit),
        page,
        limit,
      },
    };
  }

  async findById(
    id: string,
    options?: Omit<FindOptions<Attributes<T>>, 'where'>,
    transaction?: Transaction,
  ): Promise<T | null> {
    const record = await this.model.findByPk(id, { transaction, ...options });
    return record?.dataValues || null;
  }

  async create(
    item: MakeNullishOptional<Attributes<T>>,
    transaction?: Transaction,
  ): Promise<T> {
    const record = await this.model.create<T>(item, { transaction });
    return record.dataValues;
  }

  async update(
    id: string,
    updates: Partial<Attributes<T>>,
    transaction?: Transaction,
  ): Promise<T | null> {
    const [affectedCount, updatedRecords] = await this.model.update(updates, {
      where: { id } as WhereOptions<T>,
      returning: true,
      transaction,
    });

    if (affectedCount === 0) {
      return null;
    }

    return updatedRecords[0].dataValues || null;
  }

  async delete(id: string, transaction?: Transaction): Promise<number> {
    return this.model.destroy({
      where: { id } as WhereOptions<T>,
      transaction,
    });
  }
}
