import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import * as dotenv from 'dotenv';
import { ValidationPipe, Logger } from '@nestjs/common';

async function bootstrap() {
  const mainLogger = new Logger('Main');
  mainLogger.log('Calling dotenv.config');
  dotenv.config();

  mainLogger.log('Calling await NestFactory.create(AppModule)');
  const app = await NestFactory.create(AppModule);

  mainLogger.log('Calling app.useGlobalPipes()');
  app.useGlobalPipes(new ValidationPipe());

  mainLogger.log('Calling await app.listen()');
  await app.listen(3000);
}

bootstrap();
