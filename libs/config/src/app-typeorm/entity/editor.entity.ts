import { Column, Entity } from 'typeorm';

import { Generic } from './generic';

@Entity({
  name: 'editors',
})
export class EditorEntity extends Generic {
  @Column()
  name: string;
}
