import { StatusCodes } from 'http-status-codes';
import { ErrorMessage, ResponseType } from '../types';
import { translate } from '../utils';
import { ApiError } from './api-error';
import { getResponseMessage } from '../helpers';

export class ForbiddenError extends ApiError {
  constructor(args: ErrorMessage = translate('error.forbidden')) {
    super({
      statusCode: StatusCodes.BAD_REQUEST,
      errors: getResponseMessage({ defaultType: ResponseType.ERROR })(args),
    });
  }
}
