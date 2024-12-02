import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecurrenceDetailsEntity } from './recurrence-details.entity';
import { RecurrenceRuleModule } from '../recurrence-rule/recurrence-rule.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([RecurrenceDetailsEntity]),
    forwardRef(() => RecurrenceRuleModule),
  ],
})
export class RecurrenceDetailsModule {}
