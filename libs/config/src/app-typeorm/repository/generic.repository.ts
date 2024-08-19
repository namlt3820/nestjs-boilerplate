import {
  EntityManager,
  EntityTarget,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from 'typeorm';

import { IRepository } from './IRepository';

export class GenericRepository<T extends { id: string }>
  implements IRepository<T>
{
  private readonly repository: Repository<T>;

  constructor(
    private readonly entity: EntityTarget<T>,
    private readonly entityManager: EntityManager,
  ) {
    this.repository = this.entityManager.getRepository(this.entity);
  }

  async create(entity: T): Promise<T> {
    return this.repository.save(entity);
  }

  async findOne(id: string, options?: FindOneOptions<T>): Promise<T | null> {
    return this.repository.findOne({
      where: { id },
      ...options,
    } as FindOneOptions<T>);
  }

  async findAll(options: FindManyOptions<T>): Promise<[T[], number]> {
    return this.repository.findAndCount(options);
  }

  async save(entity: T): Promise<T> {
    return this.repository.save(entity);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
