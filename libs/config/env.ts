import dotenv from 'dotenv';
import { cleanEnv, str, email, num } from 'envalid';

import { ENV_FILE_PATH } from './constants';

dotenv.config({ path: ENV_FILE_PATH });

export const env = cleanEnv(process.env, {
  PORT: num(),
  NODE_ENV: str({ choices: ['development', 'production'] }),
  SERVER_URL: str(),
  ADMIN_EMAIL: email(),
  ADMIN_NAME: str({}),
  ADMIN_PASSWORD: str({}),
  DB_NAME: str({}),
  DB_URI: str({}),
  JWT_SECRET: str({}),
  JWT_EXPIRE_IN: str({}),
  CLIENT_URL: str({}),
});
