import { isNil, omitBy } from 'lodash';
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
    const document = await this.model
      .findOne({ _id: id, deleted_at: { $exists: false } })
      .session(session)
      .exec();
    return document ? document.toObject() : null;
  }

  async findOne(
    filter: FilterQuery<T>,
    session?: ClientSession,
  ): Promise<T | null> {
    return this.model
      .findOne({ ...filter, deleted_at: { $exists: false } })
      .session(session)
      .exec();
  }

  async findAll(
    filter: FilterQuery<T> = {},
    paginationOptions: PaginationOptions = {},
  ): Promise<PaginateResult<T>> {
    const sanitizedFilter = {
      ...omitBy(filter, isNil),
      deleted_at: { $exists: false },
    };
    const { page = 1, limit = 10, session } = paginationOptions;

    return this.model.paginate(sanitizedFilter, {
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
    const updatedDocument = await this.model
      .findByIdAndUpdate(id, updateDto, { ...options, session })
      .exec();

    return updatedDocument ? updatedDocument.toObject() : null;
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

  async softDelete(
    id: string,
    options: { new: boolean } = { new: true },
    session?: ClientSession,
  ) {
    const updatedDocument = await this.model
      .findByIdAndUpdate(
        id,
        { deleted_at: Date.now() },
        { ...options, session },
      )
      .exec();

    return updatedDocument ? updatedDocument.toObject() : null;
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
