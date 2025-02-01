import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RecurrenceRuleEntity } from './recurrence-rule.entity.js';

@Injectable()
export class RecurrenceRuleService {
  constructor(
    @InjectRepository(RecurrenceRuleEntity)
    private recurrenceRuleRepository: Repository<RecurrenceRuleEntity>,
  ) {}

  async findOneById(id: string): Promise<RecurrenceRuleEntity> {
    try {
      const recurrenceRule = await this.recurrenceRuleRepository.findOne({
        where: { id },
        relations: ['recurrenceDetails'],
      });

      if (!recurrenceRule) {
        throw new NotFoundException(`Recurrence rule with ID ${id} not found`);
      }

      return recurrenceRule;
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error in findOneById: ${error.message}`);
      } else {
        console.error(`Unexpected error in findOneById: ${String(error)}`);
      }
      throw error;
    }
  }

  async create(): Promise<string> {
    return 'to do';
  }
}
