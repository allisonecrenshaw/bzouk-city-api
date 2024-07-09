import { Entity, Column, TableInheritance } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class Location extends BaseEntity {
  @Column({ nullable: false })
  title: string;

  @Column()
  address_line1: string;

  @Column()
  address_line2: string;

  @Column({ nullable: false })
  city: string;

  @Column({ nullable: false })
  state: string;

  @Column({ nullable: false })
  country: string;

  @Column()
  postal_code: string;
}
