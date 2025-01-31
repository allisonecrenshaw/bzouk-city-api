import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  NewRecurrenceDetailsDTO,
  RecurrenceDetailsEntity,
} from './recurrence-details.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RecurrenceDetailsService {
  constructor(
    @InjectRepository(RecurrenceDetailsEntity)
    private recurrenceDetailsRepository: Repository<RecurrenceDetailsEntity>,
  ) {}

  async create(
    newRecurrenceDetailsDTO: NewRecurrenceDetailsDTO,
  ): Promise<RecurrenceDetailsEntity> {
    const recurrenceDetails = this.recurrenceDetailsRepository.create(
      newRecurrenceDetailsDTO,
    );
    return this.recurrenceDetailsRepository.save(recurrenceDetails);
  }
}
