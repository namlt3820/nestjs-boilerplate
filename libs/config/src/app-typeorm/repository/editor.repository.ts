import { Injectable } from '@nestjs/common';
import { IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';
import { EntityManager } from 'typeorm';

import { GetEditorsRequest } from '@lib/use-case/editor/get-editors';

import { EditorEntity } from '../entity';
import { GenericRepository } from './generic.repository';

@Injectable()
export class EditorRepository extends GenericRepository<EditorEntity> {
  constructor(entityManager: EntityManager) {
    super(EditorEntity, entityManager);
  }

  async paginate(params: GetEditorsRequest) {
    const { page = 1, limit = 10, name } = params;

    const queryBuilder = this.repository.createQueryBuilder('editor');

    if (name) {
      queryBuilder.where('editor.name LIKE :name', { name: `%${name}%` });
    }

    const paginationOptions: IPaginationOptions = {
      page,
      limit,
    };

    return paginate<EditorEntity>(queryBuilder, paginationOptions);
  }
}
