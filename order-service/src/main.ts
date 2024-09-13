import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from './db/data-source';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await AppDataSource.initialize();
  if (process.env.NODE_ENV !== 'production') {
    await AppDataSource.runMigrations();
  }

  await app.listen(3000);
}

bootstrap();
