/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { sequelize } from './config/database';
import { DataAccessModule } from "@backend/data-access"; //example import from shared libs
import { UtilsModule } from "@backend/utils"; //example import from shared libs

async function bootstrap() {
  console.log('dataAccessModule', DataAccessModule)
  console.log('utilsModule', UtilsModule)
  const app = await NestFactory.create(AppModule);
  await sequelize.sync();
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();
