import { knex } from 'knex';
import { Env } from '@src/env';

export const db = knex({
  client: 'better-sqlite3',
  connection: {
    filename: process.cwd() + '/src/database/' + Env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    directory: './src/database/migrations',
  },
  seeds: {
    directory: './src/database/seeds',
  },
});
