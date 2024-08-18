import { Prop } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

// shared among other schema classes
export class Generic {
  _id?: mongoose.Schema.Types.ObjectId;

  @Prop()
  created_at?: number;

  @Prop()
  updated_at?: number;

  @Prop()
  deleted_at?: number;
}
