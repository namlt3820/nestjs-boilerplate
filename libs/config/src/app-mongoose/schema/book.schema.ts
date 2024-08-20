import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';

import { Author, AuthorDocument } from './author.schema';
import { Generic } from './generic';

type BookDocument = HydratedDocument<Book>;

@Schema({
  collection: 'books',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  toJSON: {
    virtuals: true,
  },
  toObject: {
    virtuals: true,
  },
})
class Book extends Generic {
  @Prop([String])
  author_ids: string[];

  @Prop()
  name: string;

  authors?: AuthorDocument[];
}

const BookSchema = SchemaFactory.createForClass(Book);

BookSchema.virtual('authors', {
  ref: Author.name,
  localField: 'author_ids',
  foreignField: '_id',
});

BookSchema.plugin(mongoosePaginate);

export { Book, BookDocument, BookSchema };
