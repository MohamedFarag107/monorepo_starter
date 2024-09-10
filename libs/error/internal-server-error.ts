import { StatusCodes } from 'http-status-codes';
import { ApiError } from './api-error';
import { ErrorMessage, ResponseType } from '../types';
import { translate } from '../utils';
import { getResponseMessage } from '../helpers';

export class InternalServerError extends ApiError {
  constructor(args: ErrorMessage = translate('error.internal-server-error')) {
    super({
      statusCode: StatusCodes.BAD_REQUEST,
      errors: getResponseMessage({ defaultType: ResponseType.ERROR })(args),
    });
  }
}
