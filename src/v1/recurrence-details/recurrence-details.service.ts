import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RecurrenceDetailsEntity } from './recurrence-details.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RecurrenceDetailsService {
  constructor(
    @InjectRepository(RecurrenceDetailsEntity)
    private recurrenceDetailsRepository: Repository<RecurrenceDetailsEntity>,
  ) {}

  async create(recurrenceDetailsDto: string): Promise<string> {
    return 'todo';
  }
}
