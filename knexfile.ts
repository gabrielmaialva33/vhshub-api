import 'dotenv/config';

import * as path from 'path';
import * as process from 'process';
import type { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'better-sqlite3',
    connection: {
      filename: path.join(
        process.cwd(),
        'src',
        'database',
        process.env.DATABASE_URL!,
      ),
    },
    useNullAsDefault: true,
    migrations: {
      directory: path.join(process.cwd(), 'src', 'database', 'migrations'),
    },
    seeds: {
      directory: path.join(process.cwd(), 'src', 'database', 'seeds'),
    },
  },
};

module.exports = config;
