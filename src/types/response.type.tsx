import type { Token } from "./utils.type";

export type errorResponse = {
  data: { error: string };
  status: number;
};
export type BaseResponse = {
  message: string | null;
  error?: errorResponse;
};

export interface LoginResponse {
  token: Token;
  message: string;
}
