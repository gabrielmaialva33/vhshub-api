import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { Logger } from '@nestjs/common';

import { AppModule } from './app.module';

const logger = new Logger('Bootstrap');

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  await app.listen(process.env.PORT ?? 3000).then(
    () =>
      logger.log(
        `Server running on http://localhost:${process.env.PORT ?? 3000}`,
      ),
    (err) => logger.error(`Error starting server: ${err}`),
  );
}

bootstrap();
