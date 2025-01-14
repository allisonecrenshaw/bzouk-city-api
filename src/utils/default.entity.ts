import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

export class BaseDTO {
  id: string;
  createdDate: string;
  updatedDate: string;
  deletedDate: string;
}

export class DefaultEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ name: 'created_date' })
  createdDate: Date;

  @UpdateDateColumn({ name: 'updated_date' })
  updatedDate: Date;

  @DeleteDateColumn({ name: 'deleted_date' })
  deletedDate: Date;
}
