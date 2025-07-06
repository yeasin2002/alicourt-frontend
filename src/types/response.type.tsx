import type { Token } from "./utils.type";

export type BaseResponse = {
  message: string | null;
  error?: string | null;
};

export interface LoginResponse extends BaseResponse {
  token: Token;
}
