import { Entity, Column } from 'typeorm';
import { BaseDTO, DefaultEntity } from '../../utils/default.entity.js';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IntersectionType } from '@nestjs/mapped-types';

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

export class LocationDTO extends IntersectionType(BaseDTO, NewLocationDTO) {}

@Entity('location')
export class LocationEntity extends DefaultEntity {
  @Column({ type: 'varchar', nullable: true })
  title: string;

  @Column({ type: 'varchar', nullable: true, name: 'address_line1' })
  addressLine1: string;

  @Column({ type: 'varchar', nullable: true, name: 'address_line2' })
  addressLine2: string;

  @Column({ type: 'varchar', nullable: true })
  city: string;

  @Column({ type: 'varchar', nullable: true })
  state: string;

  @Column({ type: 'varchar', nullable: false })
  country: string;

  @Column({ type: 'varchar', nullable: true, name: 'postal_code' })
  postalCode: string;
}
