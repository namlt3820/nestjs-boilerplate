import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';

import { EditorEntity } from '../entity';
import { GenericRepository } from './generic.repository';

@Injectable()
export class EditorRepository extends GenericRepository<EditorEntity> {
  constructor(entityManager: EntityManager) {
    super(EditorEntity, entityManager);
  }
}
