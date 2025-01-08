import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecurrenceRuleEntity } from './recurrence-rule.entity.js';
import { RecurrenceDetailsModule } from '../recurrence-details/recurrence-details.module.js';
import { RecurrenceRuleController } from './recurrence-rule.controller.js';
import { RecurrenceRuleService } from './recurrence-rule.service.js';

@Module({
  imports: [
    TypeOrmModule.forFeature([RecurrenceRuleEntity]),
    forwardRef(() => RecurrenceDetailsModule),
  ],
  controllers: [RecurrenceRuleController],
  providers: [RecurrenceRuleService],
})
export class RecurrenceRuleModule {}
