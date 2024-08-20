import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';

import { Generic } from './generic';

type AuthorDocument = HydratedDocument<Author>;

@Schema({
  collection: 'authors',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
class Author extends Generic {
  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  address: string;
}

const AuthorSchema = SchemaFactory.createForClass(Author);

AuthorSchema.plugin(mongoosePaginate);

export { Author, AuthorDocument, AuthorSchema };
