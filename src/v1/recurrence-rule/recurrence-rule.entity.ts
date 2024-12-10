import { Entity, Column, OneToMany } from 'typeorm';
import { BaseDTO, BaseEntity } from '../../utils/base.entity.js';
import { RecurrenceDetailsEntity } from '../recurrence-details/recurrence-details.entity.js';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { IntersectionType } from '@nestjs/mapped-types';

export class NewRecurrenceRuleDTO {
  @IsNotEmpty()
  @IsString()
  frequency: string;

  @IsInt()
  @IsNotEmpty()
  interval: number;

  @IsNotEmpty()
  @IsString()
  start_date: string;

  @IsNotEmpty()
  @IsString()
  end_date: string;

  // TODO -- Check above section and finish this one
  // recurrenceDetails: PartialRecurrenceDetailsDTO;
}

export class RecurrenceRuleDTO extends IntersectionType(
  BaseDTO,
  NewRecurrenceRuleDTO,
) {}

@Entity('recurrence_rule')
export class RecurrenceRuleEntity extends BaseEntity {
  @Column({ type: 'varchar', nullable: false })
  frequency: string;

  @Column({ type: 'int', nullable: false })
  interval: number;

  @Column({ type: 'varchar', nullable: true })
  start_date: string;

  @Column({ type: 'varchar', nullable: true })
  end_date: string;

  @OneToMany(
    () => RecurrenceDetailsEntity,
    recurrenceDetails => recurrenceDetails.recurrenceRule,
    {
      cascade: true,
    },
  )
  recurrenceDetails: RecurrenceDetailsEntity[];
}
