import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { Logger } from '@nestjs/common';

import { AppModule } from '@src/app.module';
import { Env } from '@src/env';

const logger = new Logger('Bootstrap');

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  await app.listen(Env.PORT, Env.HOST).then(
    () =>
      logger.log(
        `Server running on http://localhost:${Env.PORT} in ${Env.NODE_ENV} mode`,
      ),
    (err) => logger.error(`Error starting server: ${err}`),
  );
}

bootstrap();
