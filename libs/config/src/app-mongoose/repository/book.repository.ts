import mongoose from 'mongoose';

import { BookDocument, BookSchema } from '../schema';
import { GenericRepository } from './generic.repository';

const BookModel = mongoose.model<
  BookDocument,
  mongoose.PaginateModel<BookDocument>
>('books', BookSchema, 'books');

export class BookRepository extends GenericRepository<BookDocument> {
  constructor() {
    super(BookModel);
  }
}
