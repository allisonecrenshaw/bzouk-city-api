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
