import { StatusCodes } from 'http-status-codes';

import { ErrorMessage, ResponseType } from '../types';
import { translate } from '../utils';
import { getResponseMessage } from '../helpers';
import { ApiError } from './api-error';

export class BadRequestError extends ApiError {
  constructor(args: ErrorMessage = translate('error.badRequest')) {
    super({
      statusCode: StatusCodes.BAD_REQUEST,
      errors: getResponseMessage({ defaultType: ResponseType.ERROR })(args),
    });
  }
}
