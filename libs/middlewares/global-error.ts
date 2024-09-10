import { NextFunction, Request, Response } from 'express';
import { ApiError, InternalServerError } from '../error';
import { env } from '../config';
import { ResponseType } from '../types';
import { translate } from '../utils';

export const globalErrorMiddleware = (
  err: Error | ApiError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  err.stack = env.isDevelopment ? err.stack : undefined;
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json(err);
  }

  const error = new InternalServerError([
    {
      message: translate('error.internal-server-error'),
      type: ResponseType.ERROR,
    },
    {
      message: err?.message || translate('error.unknown-error'),
      type: ResponseType.UNKNOWN,
    },
  ]);

  res.status(error.statusCode).json({ ...error, stack: err.stack });
};
