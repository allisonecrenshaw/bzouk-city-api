import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity.js';

@Entity('event')
// TODO update nullability, add in recurrence fix, add in time fix
export class EventEntity extends BaseEntity {
  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'varchar' })
  description: string;

  @ManyToOne(() => Location, { nullable: false })
  location: Location;

  @Column({ type: 'varchar' })
  website_url: string;

  @Column({ type: 'varchar' })
  registration_url: string;
}
