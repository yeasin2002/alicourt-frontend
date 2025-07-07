import { baseQuery } from "@/lib/rtk-base-query";
import type { BaseResponse, LoginResponse } from "@/types";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { loginBody, RegBody, verifyCodeBody } from "./endpoints-body.type";

export const api = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["auth", "chats", "plans"],
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, loginBody>({
      query: (body) => ({ url: "/login/", method: "POST", body }),
    }),
    register: builder.mutation<BaseResponse, RegBody>({
      query: (body) => ({ url: "/register/", method: "POST", body }),
    }),
    logout: builder.mutation<BaseResponse, { refresh: string }>({
      query: (body) => ({ url: "/logout/", method: "POST", body }),
    }),
    verifyCode: builder.mutation<BaseResponse, verifyCodeBody>({
      query: (body) => ({ url: "/verification-code/", method: "POST", body }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useVerifyCodeMutation,
} = api;

/*
endpoint: /verification-code/
body: {
    "email": "yeasin.dev2002@gmail.com",
    "otp": "7522"
}
*/
