import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';

console.log('LOG: Starting main');

async function bootstrap() {
  console.log('LOG: Calling dotenv.config');
  dotenv.config();

  console.log('LOG: Calling await NestFactory.create(AppModule)');
  const app = await NestFactory.create(AppModule);
  console.log('LOG: Calling app.useGlobalPipes()');
  app.useGlobalPipes(new ValidationPipe());
  console.log('LOG: Calling await app.listen()');
  await app.listen(3000);
}
bootstrap();
