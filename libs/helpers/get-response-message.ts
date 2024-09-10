import { ErrorMessage, ErrorType, ResponseType, SuccessMessage, SuccessType } from '../types';

export const getResponseMessage =
  ({ defaultType: type }: { defaultType: ResponseType }) =>
  (
    arg: SuccessMessage | ErrorMessage,
  ): typeof arg extends SuccessMessage ? SuccessType[] : ErrorType[] => {
    if (typeof arg === 'string') {
      return [{ message: arg, type }] as any;
    }

    if (Array.isArray(arg) && arg.every((item) => typeof item === 'string')) {
      return arg.map((message) => ({ message, type })) as any;
    }

    if (typeof arg === 'object' && 'message' in arg) {
      return [arg] as any;
    }

    if (Array.isArray(arg) && arg.every((item) => typeof item === 'object')) {
      return arg as any;
    }

    return [
      {
        message: 'unknown.unknown',
        type: ResponseType.UNKNOWN,
      },
    ] as any;
  };
