import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import * as dotenv from 'dotenv';
import { ValidationPipe, Logger } from '@nestjs/common';
import { ExpressAdapter } from '@nestjs/platform-express';

async function bootstrap() {
  const mainLogger = new Logger('Main');
  mainLogger.log('Calling dotenv.config');
  dotenv.config();

  mainLogger.log('Calling await NestFactory.create(AppModule)');
  const app = await NestFactory.create(AppModule);

  // Get routes
  app.enableCors();
  const httpAdapter = app.getHttpAdapter();
  
  if (httpAdapter instanceof ExpressAdapter) {
    const server = httpAdapter.getInstance();

    // Logging routes
    const routeLogger = new Logger('Routes');
    app
      .getHttpAdapter()
      .getInstance()
      ._router.stack.forEach(
        (layer: {
          route: { methods: { [x: string]: unknown }; path: any };
        }) => {
          if (layer.route) {
            const methods = Object.keys(layer.route.methods)
              .filter(method => layer.route.methods[method])
              .join(', ');
            routeLogger.log(`Route: ${methods.toUpperCase()} - ${layer.route.path}`);
          } else {
            routeLogger.log('Hitting \"else\" of \"if (layer.route)\"');
          }
        },
      );
  }

  mainLogger.log('Calling app.useGlobalPipes()');
  app.useGlobalPipes(new ValidationPipe());

  mainLogger.log('Calling await app.listen()');
  await app.listen(3000);
}

bootstrap();
