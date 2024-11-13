import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import * as dotenv from 'dotenv';
import { ValidationPipe, Logger } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { getDataSourceOptions } from './utils/config/ormconfig.js';

async function bootstrap() {
  const mainLogger = new Logger('Main');
  mainLogger.log('Calling dotenv.config');
  dotenv.config();

  mainLogger.log('Calling await NestFactory.create(AppModule)');
  const app = await NestFactory.create(AppModule);

  mainLogger.log('Calling app.useGlobalPipes()');
  app.useGlobalPipes(new ValidationPipe());

  // Get ConfigService from the Nest application context
  const configService = app.get<ConfigService>(ConfigService);

  // Create and initialize the DataSource
  const dataSource = new DataSource(getDataSourceOptions(configService));

  try {
    await dataSource.initialize();
    const dbLogger = new Logger('DatabaseConnection');
    dbLogger.log('Database connection established successfully.');

    // Optionally log database details
    dbLogger.log(`DB_HOST: ${process.env.DB_HOST}`);
    dbLogger.log(`DB_USERNAME: ${process.env.DB_USERNAME}`);
    dbLogger.log(`DB_NAME: ${process.env.DB_NAME}`);
  } catch (error) {
    const dbErrorLogger = new Logger('DatabaseConnection');
    dbErrorLogger.error('Database connection failed:', error);
    process.exit(1); // Exit the process if the DB connection fails
  }

  mainLogger.log('Calling await app.listen()');
  await app.listen(3000);

  const dbLogger = new Logger('DatabaseConnection');
  dbLogger.log(`DB_HOST: ${process.env.DB_HOST}`);
  dbLogger.log(`DB_USERNAME: ${process.env.DB_USERNAME}`);
  dbLogger.log(`DB_NAME: ${process.env.DB_NAME}`);
}

bootstrap();
