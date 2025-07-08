import { baseQuery } from "@/lib/rtk-base-query";
import type {
  BaseResponse,
  ConfirmResetPassword,
  LoginBody,
  LoginResponse,
  RegBody,
  VerifyCodeBody,
} from "@/types";
import { createApi } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginBody>({
      query: (body) => ({ url: "/login/", method: "POST", body }),
    }),
    register: builder.mutation<BaseResponse, RegBody>({
      query: (body) => ({ url: "/register/", method: "POST", body }),
    }),
    logout: builder.mutation<BaseResponse, { refresh: string }>({
      query: (body) => ({ url: "/logout/", method: "POST", body }),
    }),
    verifyCode: builder.mutation<BaseResponse, VerifyCodeBody>({
      query: (body) => ({ url: "/verification-code/", method: "POST", body }),
    }),
    resetPassword: builder.mutation<BaseResponse, { email: string }>({
      query: (body) => ({ url: "/reset-password/", method: "POST", body }),
    }),
    confirmResetPassword: builder.mutation<BaseResponse, ConfirmResetPassword>({
      query: (body) => ({
        url: "/password-reset-confirm/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useVerifyCodeMutation,
  useResetPasswordMutation,
  useConfirmResetPasswordMutation,
} = authApi;
