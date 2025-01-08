import { Module, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LocationEntity } from './location/location.entity.js';
import { LocationController } from './location/location.controller.js';
import { LocationService } from './location/location.service.js';
import { RecurrenceDetailsEntity } from './recurrence-details/recurrence-details.entity.js';
import { RecurrenceRuleEntity } from './recurrence-rule/recurrence-rule.entity.js';
import { RecurrenceRuleController } from './recurrence-rule/recurrence-rule.controller.js';
import { RecurrenceRuleService } from './recurrence-rule/recurrence-rule.service.js';

const logger = new Logger('v1Module');
logger.log('Hitting v1.module');

@Module({
  imports: [
    TypeOrmModule.forFeature([
      LocationEntity,
      RecurrenceRuleEntity,
      RecurrenceDetailsEntity,
    ]),
  ],
  controllers: [LocationController, RecurrenceRuleController],
  providers: [LocationService, RecurrenceRuleService],
})
export class V1Module {}
