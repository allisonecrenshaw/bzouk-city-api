import { Controller, Get, Param } from '@nestjs/common';
import { RecurrenceRuleService } from './recurrence-rule.service.js';
import { RecurrenceRuleEntity } from './recurrence-rule.entity.js';

@Controller('recurrence-rule')
export class RecurrenceRuleController {
  constructor(private readonly recurrenceRuleService: RecurrenceRuleService) {}

  @Get(':id')
  async getById(@Param('id') id: string): Promise<RecurrenceRuleEntity | null> {
    return this.recurrenceRuleService.findOneById(id);
  }
}
