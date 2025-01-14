import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { DefaultEntity } from '../../utils/default.entity.js';
import { LocationEntity } from '../location/location.entity.js';

@Entity('event')
export class EventEntity extends DefaultEntity {
  @Column({ type: 'varchar', nullable: false })
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @ManyToOne(() => LocationEntity, { nullable: false, onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'location_id' })
  location: LocationEntity;

  @Column({ name: 'location_id', type: 'uuid', nullable: false })
  locationId: string;

  @Column({ type: 'timestamptz', nullable: false, name: 'start_date_time' })
  startDateTime: Date;

  @Column({ type: 'timestamptz', nullable: false, name: 'end_date_time' })
  endDateTime: Date;

  @Column({ type: 'boolean', nullable: false, name: 'is_recurring' })
  isRecurring: boolean;

  @Column({ type: 'varchar', nullable: false })
  type: string; // TODO create an enum of event types to be enforced here

  @Column({ type: 'varchar', nullable: true, name: 'website_url' })
  websiteURL: string;

  @Column({ type: 'varchar', nullable: true, name: 'registration_url' })
  registrationURL: string;

  // @ManyToOne(() => EventEntity, { nullable: true })
  // @JoinColumn({ name: 'parent_event_id' })
  // parentEvent: EventEntity;

  // @Column({ type: 'uuid', nullable: true, name: 'parent_event_id' })
  // parentEventId: string;
}
