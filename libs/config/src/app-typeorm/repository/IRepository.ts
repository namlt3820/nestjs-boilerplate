import { FindManyOptions, FindOneOptions } from 'typeorm';

export interface IRepository<T> {
  create(entity: T): Promise<T>;
  findOne(id: string, options?: FindOneOptions<T>): Promise<T | null>;
  findAll(options: FindManyOptions<T>): Promise<[T[], number]>;
  save(entity: T): Promise<T>;
  delete(id: string): Promise<void>;
}
