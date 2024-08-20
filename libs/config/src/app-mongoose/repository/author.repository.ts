import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel } from 'mongoose';

import { AuthorDocument } from '../schema';
import { GenericRepository } from './generic.repository';

export class AuthorRepository extends GenericRepository<AuthorDocument> {
  constructor(
    @InjectModel('authors')
    protected authorModel: PaginateModel<AuthorDocument>,
  ) {
    super(authorModel);
  }
}
