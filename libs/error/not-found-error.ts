import { StatusCodes } from 'http-status-codes';
import { ErrorMessage, ResponseType } from '../types';
import { translate } from '../utils';
import { ApiError } from './api-error';
import { getResponseMessage } from '../helpers';

export class NotFoundError extends ApiError {
  constructor(args: ErrorMessage = translate('error.not-found')) {
    super({
      statusCode: StatusCodes.BAD_REQUEST,
      errors: getResponseMessage({ defaultType: ResponseType.ERROR })(args),
    });
  }
}
