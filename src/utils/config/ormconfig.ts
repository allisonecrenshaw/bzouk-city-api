import { ConfigService } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm';

console.log('LOG: Hitting ormconfig');

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
  entities: ['src/v1/**/*.entity.js'],
  migrations: ['src/migrations/**/*.js'],
});
