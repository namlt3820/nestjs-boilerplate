import { ClientSession } from 'mongoose';

export interface PaginationOptions {
  page?: number;
  limit?: number;
  session?: ClientSession;
}
