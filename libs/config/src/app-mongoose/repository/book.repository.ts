import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel } from 'mongoose';

import { BookDocument } from '../schema';
import { GenericRepository } from './generic.repository';

export class BookRepository extends GenericRepository<BookDocument> {
  constructor(
    @InjectModel('books')
    protected bookModel: PaginateModel<BookDocument>,
  ) {
    super(bookModel);
  }
}
