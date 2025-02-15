import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { DefaultEntity } from '../../utils/default.entity.js';
import { LocationEntity } from '../location/location.entity.js';
import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  IsUUID,
  ValidateNested,
} from 'class-validator';

import { EventTypes } from '../constants.js';
import { NewRecurrenceRuleDTO } from '../recurrence-rule/recurrence-rule.entity.js';
import { NewRecurrenceDetailsDTO } from '../recurrence-details/recurrence-details.entity.js';
import { Type } from 'class-transformer';

export class NewEventDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsUUID()
  @IsNotEmpty()
  locationId: string;

  @IsDateString()
  @IsNotEmpty()
  startDateTime: string;

  @IsDateString()
  @IsNotEmpty()
  endDateTime: string;

  @IsBoolean()
  @IsNotEmpty()
  isRecurring: boolean;

  @IsString()
  @IsNotEmpty()
  type: EventTypes;

  @IsOptional()
  @IsUrl()
  websiteURL?: string;

  @IsOptional()
  @IsUrl()
  registrationURL: string;

  @IsOptional()
  @IsUUID()
  parentEventId: string;

  @ValidateNested()
  @Type(() => NewRecurrenceRuleDTO)
  @IsNotEmpty()
  recurrenceRule: NewRecurrenceRuleDTO;

  @IsArray()
  @ArrayMinSize(1) // Ensures at least one recurrence detail
  @ValidateNested({ each: true })
  @Type(() => NewRecurrenceDetailsDTO)
  recurrenceDetails: NewRecurrenceDetailsDTO[];
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
