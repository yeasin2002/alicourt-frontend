import { baseQuery } from "@/lib/rtk-base-query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["users", "chats"],
  endpoints: (builder) => ({
    login: builder.mutation<void, { email: string; password: string }>({
      query: (body) => ({
        url: "/authentication/login/",
        method: "POST",
        body,
      }),
    }),
    register: builder.mutation<void, { email: string; password: string }>({
      query: (body) => ({
        url: "/authentication/signup/",
        method: "POST",
        body,
      }),
    }),
    sendOtp: builder.mutation<void, { email: string }>({
      query: (body) => ({
        url: "/send-otp/",
        method: "POST",
        body,
      }),
    }),
    verifyOtp: builder.mutation<void, { email: string; otp: string }>({
      query: (body) => ({
        url: "/verify-otp/",
        method: "POST",
        body,
      }),
    }),
    resetPassword: builder.mutation<void, { email: string }>({
      query: (body) => ({
        url: "/request-password-reset/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useSendOtpMutation,
  useVerifyOtpMutation,
  useResetPasswordMutation,
} = api;