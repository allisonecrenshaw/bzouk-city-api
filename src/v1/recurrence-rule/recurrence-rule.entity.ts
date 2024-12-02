import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity.js';

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
}
