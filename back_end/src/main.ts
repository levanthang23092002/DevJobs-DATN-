import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    '/',
    express.static(join(__dirname, '..', '..', 'frontend', 'build')),
  );
  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
