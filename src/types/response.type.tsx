import type { Token } from "./utils.type";

export type errorResponse = {
  data: { error: string };
  status: number;
};

export type LoginResponse = {
  token: Token;
  message: string;
};

export type BaseResponse = {
  message?: string;
};

export type ApiResponse<T> = {
  data: T;
  error?: errorResponse;
};
