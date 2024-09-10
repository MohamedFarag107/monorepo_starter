import { getReasonPhrase, StatusCodes } from 'http-status-codes';

import { ErrorType, ResponseStatus } from '../types';

export class ApiError extends Error {
  status: ResponseStatus;
  statusCode: StatusCodes;
  errors: ErrorType[];
  constructor({ errors, statusCode }: { statusCode: StatusCodes; errors: ErrorType[] }) {
    super();
    this.status = ResponseStatus.ERROR;
    this.statusCode = statusCode;
    this.name = getReasonPhrase(statusCode);
    this.errors = errors;
  }
}
