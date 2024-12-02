import { Module, Logger } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getDataSourceOptions } from './utils/config/ormconfig.js';
import { LocationEntity } from './v1/location/location.entity.js';
import { LocationController } from './v1/location/location.controller.js';
import { LocationService } from './v1/location/location.service.js';
import { RecurrenceRuleEntity } from './v1/recurrence-rule/recurrence-rule.entity.js';
import { RecurrenceDetailsEntity } from './v1/recurrence-details/recurrence-details.entity.js';

const logger = new Logger('AppModule');
logger.log('Hitting app.module');

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        getDataSourceOptions(configService),
    }),
    TypeOrmModule.forFeature([
      LocationEntity,
      RecurrenceRuleEntity,
      RecurrenceDetailsEntity,
    ]),
  ],
  controllers: [LocationController],
  providers: [LocationService],
})
export class AppModule {}
