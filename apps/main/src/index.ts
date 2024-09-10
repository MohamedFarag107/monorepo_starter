import '@teamhr/libs/config/env';

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoSanitize from 'express-mongo-sanitize';

import {
  app,
  db_connection,
  env,
  globalErrorMiddleware,
  logger,
  notFoundMiddleware,
} from '@teamhr/libs';

// ======================== Importing Routes ========================

app.middlewares((application) => {
  application.use(morgan('dev'));
  application.use(express.json());
  application.use(express.urlencoded({ extended: true }));
  application.use('/api/v1/uploads', express.static('uploads'));
  application.use(
    cors({
      origin: [env.CLIENT_URL],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    }),
  );
  application.use(mongoSanitize());
});

app.mountRoutes((application) => {
  application.use('*', notFoundMiddleware);
  application.use(globalErrorMiddleware);
});

app.listen(env.PORT, async () => {
  await db_connection();
  await app.onMount();
});

// ======================== Event Listeners ========================
const EVENTS = [
  {
    name: 'SIGINT',
    cb: () => {
      logger.debug('Server is shutting down');
      app.onServerShutdown();
      process.exit(0);
    },
  },
  {
    name: 'unhandledRejection',
    cb: (err: unknown) => {
      logger.error(err);
      process.exit(1);
    },
  },
];

EVENTS.forEach(({ cb, name }) => process.on(name, cb));
