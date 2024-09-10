import { ResponseType } from '../enums';

export type SuccessType = {
  message: string;
  type: Exclude<ResponseType, ResponseType.ERROR>;
  key?: string;
};

export type SuccessMessage = string | string[] | SuccessType | SuccessType[];
