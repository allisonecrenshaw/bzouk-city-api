import { Entity, Column, TableInheritance } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class Location extends BaseEntity {
  @Column({ type: 'varchar', nullable: true })
  title: string;

  @Column({ type: 'varchar', nullable: true })
  address_line1: string;

  @Column({ type: 'varchar', nullable: true })
  address_line2: string;

  @Column({ type: 'varchar', nullable: true })
  city: string;

  @Column({ type: 'varchar', nullable: true })
  state: string;

  @Column({ type: 'varchar', nullable: false })
  country: string;

  @Column({ type: 'varchar', nullable: true })
  postal_code: string;
}
