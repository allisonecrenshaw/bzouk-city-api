import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RecurrenceRuleEntity } from './recurrence-rule.entity.js';

@Injectable()
export class RecurrenceRuleService {
  constructor(
    @InjectRepository(RecurrenceRuleEntity)
    private recurrenceRuleRepository: Repository<RecurrenceRuleEntity>,
  ) {}

  async findOneById(id: string): Promise<RecurrenceRuleEntity | null> {
    try {
      const recurrenceRule = await this.recurrenceRuleRepository.findOne({
        where: { id },
        relations: ['recurrenceDetails'],
      });
      return recurrenceRule;
    } catch (error) {
      return null;
    }
  }
}
