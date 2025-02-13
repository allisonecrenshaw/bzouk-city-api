import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { DefaultEntity } from '../../utils/default.entity.js';
import { LocationEntity } from '../location/location.entity.js';

export class NewEventDTO {
  // title
  // description
  // locationId
  // startDateTime
  // endDateTime
  // isRecurring
  // types (array?) (if allowing multiple, need to change entity and create join table)
  // websiteUrl
  // registrationUrl
  // parentEventId
}

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

  @ManyToOne(() => EventEntity, event => event.childEvents, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'parent_event_id' })
  parentEvent: EventEntity;

  @Column({ type: 'uuid', nullable: true, name: 'parent_event_id' })
  parentEventId: string;

  @OneToMany(() => EventEntity, event => event.parentEventId, { cascade: true })
  childEvents: EventEntity[];
}
