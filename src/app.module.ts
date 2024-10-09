import { Module, Logger } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from './utils/config/ormconfig.js';
import { LocationController } from './v1/location/location.controller.js';
import { LocationService } from './v1/location/location.service.js';

const logger = new Logger('AppModule');
logger.log('Hitting app.module');

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ormConfig(configService),
    }),
  ],
  controllers: [LocationController],
  providers: [LocationService],
})
export class AppModule {}
