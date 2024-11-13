import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity.js';

@Entity('day_of_week')
export class DayOfWeekEntity extends BaseEntity {
  @Column({ type: 'int', nullable: false })
  number: number;

  @Column({ type: 'varchar', nullable: false })
  day_name: string;
}
