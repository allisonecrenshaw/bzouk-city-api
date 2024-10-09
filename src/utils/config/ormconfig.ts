import { ConfigService } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm';
import { Logger } from '@nestjs/common';

const logger = new Logger('ORMConfig');
logger.log('Hitting ormconfig');

export default (configService: ConfigService): DataSourceOptions => ({
  type: 'postgres',
  host: configService.get<string>('DB_HOST'),
  port: configService.get<number>('DB_PORT'),
  username: configService.get<string>('DB_USER'),
  password: configService.get<string>('DB_PASSWORD'),
  database: configService.get<string>('DB_NAME'),
  ssl:
    configService.get<string>('NODE_ENV') === 'production'
      ? { rejectUnauthorized: false }
      : false,
  synchronize: configService.get<string>('NODE_ENV') !== 'production',
  entities: ['dist/v1/**/*.entity.js'],
  migrations: ['dist/migrations/**/*.js'],
});
