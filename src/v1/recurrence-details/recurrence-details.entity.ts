import { Entity, Column, ManyToOne } from 'typeorm';
import { DefaultEntity } from '../../utils/default.entity.js';
import { RecurrenceRuleEntity } from '../recurrence-rule/recurrence-rule.entity.js';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class NewRecurrenceDetailsDTO {
  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsString()
  value: string;

  @IsNotEmpty()
  @IsUUID()
  recurrenceRuleId?: string;
}

@Entity('recurrence_details')
export class RecurrenceDetailsEntity extends DefaultEntity {
  @Column({ type: 'varchar', nullable: false })
  type: string;

  @Column({ type: 'varchar', nullable: false })
  value: string;

  @Column({ type: 'varchar', nullable: false, name: 'start_time' })
  startTime: string;

  @Column({ type: 'varchar', nullable: false, name: 'end_time' })
  endTime: string;

  @Column({ type: 'varchar', nullable: false, name: 'spans_next_day' })
  spansNextDay: boolean;

  @ManyToOne(
    () => RecurrenceRuleEntity,
    recurrenceRule => recurrenceRule.recurrenceDetails,
    {
      onDelete: 'CASCADE',
      nullable: false,
    },
  )
  recurrenceRule: Promise<RecurrenceRuleEntity>;
}
