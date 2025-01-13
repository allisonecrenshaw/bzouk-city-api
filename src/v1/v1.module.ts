import { Module, Logger } from '@nestjs/common';

import { LocationModule } from './location/location.module.js';
import { RecurrenceRuleModule } from './recurrence-rule/recurrence-rule.module.js';
import { RecurrenceDetailsModule } from './recurrence-details/recurrence-details.module.js';
import { EventModule } from './event/event.module.js';

const logger = new Logger('v1Module');
logger.log('Hitting v1.module');

@Module({
  imports: [
    LocationModule,
    RecurrenceRuleModule,
    RecurrenceDetailsModule,
    EventModule,
  ],
})
export class V1Module {}
