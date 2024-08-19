import { EntityManager } from 'typeorm';

import { EditorEntity } from '../entity';
import { GenericRepository } from './generic.repository';

export class EditorRepository extends GenericRepository<EditorEntity> {
  constructor(entityManager: EntityManager) {
    super(EditorEntity, entityManager);
  }
}
