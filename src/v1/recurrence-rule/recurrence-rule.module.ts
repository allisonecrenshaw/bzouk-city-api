import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecurrenceRuleEntity } from './recurrence-rule.entity.js';
import { RecurrenceDetailsModule } from '../recurrence-details/recurrence-details.module.js';

@Module({
  imports: [
    TypeOrmModule.forFeature([RecurrenceRuleEntity]),
    forwardRef(() => RecurrenceDetailsModule),
  ],
  exports: [TypeOrmModule],
})
export class RecurrenceRuleModule {}
