import { ResponseType } from '../enums';

export type ErrorType = {
  message: string;
  type: Exclude<ResponseType, ResponseType.SUCCESS>;
  key?: string;
};

export type ErrorMessage = string | string[] | ErrorType | ErrorType[];
