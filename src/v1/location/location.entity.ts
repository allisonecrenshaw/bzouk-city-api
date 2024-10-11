import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity.js';

export class NewLocationDTO {
  title: string;
  address_line1: string;
  address_line2: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;
}

@Entity('location')
export class LocationEntity extends BaseEntity {
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
