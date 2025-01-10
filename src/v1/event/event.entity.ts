import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity.js';

@Entity('event')
// TODO add in recurrence fix, add in time fix
export class EventEntity extends BaseEntity {
  @Column({ type: 'varchar', nullable: false })
  title: string;

  @Column({ type: 'varchar', nullable: true })
  description: string;

  @ManyToOne(() => Location, { nullable: false })
  location: Location;

  @Column({ type: 'varchar', nullable: true })
  website_url: string;

  @Column({ type: 'varchar', nullable: true })
  registration_url: string;
}
