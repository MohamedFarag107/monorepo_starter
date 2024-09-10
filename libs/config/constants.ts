import path from 'node:path';

export const ROOT_DIR = path.resolve(__dirname, '../../');

export const LOG_DIR = path.resolve(ROOT_DIR, 'logs');

export const LANGUAGE_DIR = path.resolve(ROOT_DIR, 'locales');

export const ENV_FILE_PATH = path.resolve(ROOT_DIR, `.env.${process.env.NODE_ENV}`);

export const ACCEPT_LANGUAGE = ['en', 'ar'];

export const ACCEPT_LANGUAGE_HEADER_KEY = 'Accept-Language' as const;
