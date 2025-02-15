import 'dotenv/config';

import { cleanEnv, num, str } from 'envalid';

export const Env = cleanEnv(process.env, {
  // App
  HOST: str({ default: 'localhost', desc: 'The host to bind the server to' }),
  PORT: num({ default: 3000, desc: 'The port to bind the server to' }),
  NODE_ENV: str({
    default: 'development',
    desc: 'The environment the server is running in',
    choices: ['development', 'test', 'production', 'staging'],
  }),
  // Database
  DATABASE_URL: str({ desc: 'The URL to the database' }),
});
