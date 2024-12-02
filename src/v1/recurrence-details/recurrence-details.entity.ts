import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity.js';
import { RecurrenceRuleEntity } from '../recurrence-rule/recurrence-rule.entity.js';

@Entity('recurrence_details')
export class RecurrenceDetailsEntity extends BaseEntity {
  @ManyToOne(
    () => RecurrenceRuleEntity,
    recurrenceRule => recurrenceRule.recurrenceDetails,
    {
      onDelete: 'CASCADE',
    },
  )
  recurrenceRule: RecurrenceRuleEntity;

  @Column({ type: 'varchar', nullable: false })
  type: string;

  @Column({ type: 'varchar', nullable: false })
  value: string;
}