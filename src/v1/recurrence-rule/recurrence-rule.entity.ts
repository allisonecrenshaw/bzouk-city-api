import { BaseEntity, Column, Entity } from 'typeorm';

@Entity('recurrence_rule')
export class RecurrenceRuleEntity extends BaseEntity {
  @Column({ type: 'varchar', nullable: false })
  frequency: string;

  @Column({ type: 'int', nullable: false })
  interval: number;

  @Column({ type: 'varchar', nullable: true })
  days_of_week: string; // ex: every Wed, or every MWF

  @Column({ type: 'varchar', nullable: true })
  day_of_month: string; // ex: 7th of every month

  @Column({ type: 'varchar', nullable: true })
  day_occurrence_in_month: string; // ex: 1st Friday of each month

  @Column({ type: 'varchar', nullable: true })
  start_date: string;

  @Column({ type: 'varchar', nullable: true })
  end_date: string;
}
