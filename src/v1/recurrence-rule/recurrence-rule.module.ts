import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecurrenceRuleEntity } from './recurrence-rule.entity';
import { RecurrenceDetailsModule } from '../recurrence-details/recurrence-details.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([RecurrenceRuleEntity]),
    forwardRef(() => RecurrenceDetailsModule),
  ],
})
export class RecurrenceRuleModule {}
