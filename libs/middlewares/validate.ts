import { Handler } from 'express';
import { matchedData, ValidationChain, validationResult } from 'express-validator';

import { capitalize } from '../helpers';
import { asyncHandler } from '../utils';
import { ErrorType, ResponseType } from '../types';
import { ValidationError } from '../error';

export const validate = (validationSchema: ValidationChain | ValidationChain[]): Handler[] => [
  validationSchema as any,
  asyncHandler(async (req, _res, next) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      req.body = matchedData(req, { locations: ['body'] });
      req.query = matchedData(req, { locations: ['query'] });
      req.params = matchedData(req, { locations: ['params'] });
      return next();
    }

    const errors: ErrorType[] = result.array().map((error) => ({
      message: capitalize(error.msg),
      type: ResponseType.VALIDATION,
      key: (error as any)?.path || '',
    }));

    throw new ValidationError(errors);
  }),
];
