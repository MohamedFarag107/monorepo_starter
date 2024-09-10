import { translate, asyncHandler } from '../utils';
import { NotFoundError } from '../error';

export const notFoundMiddleware = asyncHandler((req) => {
  const originalUrl = req.originalUrl;
  throw new NotFoundError(translate('error.path-not-found', { path: originalUrl }));
});
