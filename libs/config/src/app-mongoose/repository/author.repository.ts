import mongoose from 'mongoose';

import { AuthorDocument, AuthorSchema } from '../schema';
import { GenericRepository } from './generic.repository';

const AuthorModel = mongoose.model<
  AuthorDocument,
  mongoose.PaginateModel<AuthorDocument>
>('authors', AuthorSchema, 'authors');

export class AuthorRepository extends GenericRepository<AuthorDocument> {
  constructor() {
    super(AuthorModel);
  }
}
