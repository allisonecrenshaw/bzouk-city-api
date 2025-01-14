import { Entity, Column, OneToMany } from 'typeorm';
import { BaseDTO, DefaultEntity } from '../../utils/default.entity.js';
import {
  NewRecurrenceDetailsDTO,
  RecurrenceDetailsEntity,
} from '../recurrence-details/recurrence-details.entity.js';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { IntersectionType } from '@nestjs/mapped-types';

export class NewRecurrenceRuleDTO {
  @IsNotEmpty()
  @IsString()
  frequency: string;

  @IsInt()
  @IsNotEmpty()
  interval: number;

  recurrenceDetails: NewRecurrenceDetailsDTO;
}

export class RecurrenceRuleDTO extends IntersectionType(
  BaseDTO,
  NewRecurrenceRuleDTO,
) {}

@Entity('recurrence_rule')
export class RecurrenceRuleEntity extends DefaultEntity {
  @Column({ type: 'varchar', nullable: false })
  frequency: string;

  @Column({ type: 'int', nullable: false })
  interval: number;

  @OneToMany(
    () => RecurrenceDetailsEntity,
    recurrenceDetails => recurrenceDetails.recurrenceRule,
    {
      cascade: true,
    },
  )
  recurrenceDetails: RecurrenceDetailsEntity[];
}
