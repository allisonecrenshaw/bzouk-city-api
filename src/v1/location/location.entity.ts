import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity.js';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class NewLocationDTO {
  @IsOptional()
  title: string;
  @IsOptional()
  address_line1: string;
  @IsOptional()
  address_line2: string;
  @IsOptional()
  city: string;
  @IsOptional()
  state: string;
  @IsNotEmpty()
  @IsString()
  country: string;
  @IsOptional()
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
