import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';

import { EditorEntity } from '../../libs/config/src/app-typeorm';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.POSTGRES_URI,
  entities: [EditorEntity],
  migrations: ['migrations/typeorm/migrations/*.ts'],
  synchronize: false,
});
