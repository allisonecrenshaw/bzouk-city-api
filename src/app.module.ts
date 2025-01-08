import { Module, Logger } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getDataSourceOptions } from './utils/config/ormconfig.js';
import { V1Module } from './v1/v1.module.js';

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
    V1Module,
  ],
})
export class AppModule {}
