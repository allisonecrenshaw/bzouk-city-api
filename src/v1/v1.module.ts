import { Module, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RecurrenceDetailsEntity } from './recurrence-details/recurrence-details.entity.js';
import { RecurrenceRuleEntity } from './recurrence-rule/recurrence-rule.entity.js';
import { RecurrenceRuleController } from './recurrence-rule/recurrence-rule.controller.js';
import { RecurrenceRuleService } from './recurrence-rule/recurrence-rule.service.js';
import { LocationModule } from './location/location.module.js';

const logger = new Logger('v1Module');
logger.log('Hitting v1.module');

@Module({
  imports: [
    TypeOrmModule.forFeature([RecurrenceRuleEntity, RecurrenceDetailsEntity]),
    LocationModule,
  ],
  controllers: [RecurrenceRuleController],
  providers: [RecurrenceRuleService],
})
export class V1Module {}
