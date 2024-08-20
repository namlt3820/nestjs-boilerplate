import {
  ClientSession,
  Document,
  FilterQuery,
  PaginateModel,
  PaginateResult,
  UpdateQuery,
} from 'mongoose';

import { PaginationOptions } from '@lib/use-case/types/paginationOptions';

export class GenericRepository<T extends Document> {
  protected readonly model: PaginateModel<T>;

  constructor(model: PaginateModel<T>) {
    this.model = model;
  }

  async create(createDto: Partial<T>, session?: ClientSession): Promise<T> {
    const createdDocument = new this.model(createDto);
    const savedDocument = await createdDocument.save({ session });
    return savedDocument.toObject();
  }

  async findById(id: string, session?: ClientSession): Promise<T | null> {
    return this.model.findById(id).session(session).exec();
  }

  async findOne(
    filter: FilterQuery<T>,
    session?: ClientSession,
  ): Promise<T | null> {
    return this.model.findOne(filter).session(session).exec();
  }

  async findAll(
    filter: FilterQuery<T> = {},
    paginationOptions: PaginationOptions = {},
  ): Promise<PaginateResult<T>> {
    const { page = 1, limit = 10, session } = paginationOptions;
    return this.model.paginate(filter, {
      page,
      limit,
      session,
      lean: true,
    });
  }

  async update(
    id: string,
    updateDto: UpdateQuery<T>,
    options: { new: boolean } = { new: true },
    session?: ClientSession,
  ): Promise<T | null> {
    return this.model
      .findByIdAndUpdate(id, updateDto, { ...options, session })
      .exec();
  }

  async delete(id: string, session?: ClientSession): Promise<T | null> {
    return this.model.findByIdAndDelete(id).session(session).exec();
  }

  async deleteMany(
    filter: FilterQuery<T>,
    session?: ClientSession,
  ): Promise<{ deletedCount?: number }> {
    return this.model.deleteMany(filter).session(session).exec();
  }

  async startTransaction(): Promise<ClientSession> {
    return this.model.db.startSession();
  }

  async withTransaction<R>(
    session: ClientSession,
    operation: (session: ClientSession) => Promise<R>,
  ): Promise<R> {
    let result: R;
    await session.withTransaction(async () => {
      result = await operation(session);
    });
    return result!;
  }
}
