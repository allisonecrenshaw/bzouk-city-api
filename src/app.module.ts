import { Module, Logger } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getDataSourceOptions } from './utils/config/ormconfig.js';
import { LocationEntity } from './v1/location/location.entity.js';
import { LocationController } from './v1/location/location.controller.js';
import { LocationService } from './v1/location/location.service.js';
import { RecurrenceRuleModule } from './v1/recurrence-rule/recurrence-rule.module.js';
import { RecurrenceDetailsModule } from './v1/recurrence-details/recurrence-details.module.js';
import { RecurrenceDetailsEntity } from './v1/recurrence-details/recurrence-details.entity.js';
import { RecurrenceRuleEntity } from './v1/recurrence-rule/recurrence-rule.entity.js';
import { RecurrenceRuleController } from './v1/recurrence-rule/recurrence-rule.controller.js';
import { RecurrenceRuleService } from './v1/recurrence-rule/recurrence-rule.service.js';

const logger = new Logger('AppModule');
logger.log('Hitting app.module');

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const options = await getDataSourceOptions(configService);

        return {
          ...options,
          autoLoadEntities: true,
        };
      },
    }),
    TypeOrmModule.forFeature([
      LocationEntity,
      RecurrenceRuleEntity,
      RecurrenceDetailsEntity,
    ]),
  ],
  controllers: [LocationController, RecurrenceRuleController],
  providers: [LocationService, RecurrenceRuleService],
})
export class AppModule {}
