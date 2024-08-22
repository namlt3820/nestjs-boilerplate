import {
  DeepPartial,
  EntityManager,
  EntityTarget,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export class GenericRepository<T> {
  protected readonly repository: Repository<T>;

  constructor(
    protected readonly entity: EntityTarget<T>,
    protected readonly entityManager: EntityManager,
  ) {
    this.repository = this.entityManager.getRepository(this.entity);
  }

  async create(entity: DeepPartial<T>): Promise<T> {
    return this.repository.save(entity);
  }

  async findOne(id: string, options?: FindOneOptions<T>): Promise<T | null> {
    return this.repository.findOne({
      where: { id },
      ...options,
    } as FindOneOptions<T>);
  }

  async findAll(options: FindManyOptions<T>): Promise<[T[], number]> {
    if (options.skip === undefined) {
      options.skip = 0;
    }

    if (options.take === undefined) {
      options.take = 10;
    }

    return this.repository.findAndCount(options);
  }

  async save(entity: T): Promise<T> {
    return this.repository.save(entity);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async update(id: string, updateData: QueryDeepPartialEntity<T>): Promise<T> {
    const updatedEntity = await this.repository
      .createQueryBuilder()
      .update()
      .set(updateData)
      .where('id = :id', { id })
      .returning('*')
      .execute();

    return updatedEntity.raw[0];
  }

  async softDelete(id: string) {
    await this.repository.softDelete(id);
  }
}
