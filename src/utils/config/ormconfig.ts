import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();

const configService = new ConfigService();

console.log('log: In ormconfig.ts, BEFORE export new DataSource.');

export default new DataSource({
  type: 'postgres',
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  synchronize: false,
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  logging: false,
  entities: ['src/v1/**/*.entity.ts'],
  migrations: ['src/migrations/**/*.ts'],
});

console.log('log: In ormconfig.ts, AFTER export new DataSource.');
