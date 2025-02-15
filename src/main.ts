import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const logger = new Logger('Bootstrap');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000).then(
    // use http link
    () =>
      logger.log(
        `Server is running on http://localhost:${process.env.PORT ?? 3000}`,
      ),
  );
}

bootstrap();
