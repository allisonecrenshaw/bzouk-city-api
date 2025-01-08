import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecurrenceDetailsEntity } from './recurrence-details.entity.js';
import { RecurrenceRuleModule } from '../recurrence-rule/recurrence-rule.module.js';

@Module({
  imports: [
    TypeOrmModule.forFeature([RecurrenceDetailsEntity]),
    forwardRef(() => RecurrenceRuleModule),
  ],
})
export class RecurrenceDetailsModule {}
