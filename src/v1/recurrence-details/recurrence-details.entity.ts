import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity.js';
import { RecurrenceRuleEntity } from '../recurrence-rule/recurrence-rule.entity.js';
import { IsNotEmpty, IsString } from 'class-validator';

export class NewRecurrenceDetailsDTO {
  // TODO -- Check this section -- not yet finished with recurrence rule DTO
  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsString()
  value: string;
}

@Entity('recurrence_details')
export class RecurrenceDetailsEntity extends BaseEntity {
  @Column({ type: 'varchar', nullable: false })
  type: string;

  @Column({ type: 'varchar', nullable: false })
  value: string;

  @ManyToOne(
    () => RecurrenceRuleEntity,
    recurrenceRule => recurrenceRule.recurrenceDetails,
    {
      onDelete: 'CASCADE',
    },
  )
  recurrenceRule: Promise<RecurrenceRuleEntity>;
}
