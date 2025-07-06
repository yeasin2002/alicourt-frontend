import { baseQuery } from "@/lib/rtk-base-query";
import type { BaseResponse, LoginResponse } from "@/types";
import { createApi } from "@reduxjs/toolkit/query/react";

type userBody = {
  username: "yeasin";
  email: "fasesow178@datingso.com";
  password: "123";
  password2: "123";
};

export const api = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["users", "chats", "plans"],
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, { email: string; password: string }>(
      {
        query: (body) => ({ url: "/login/", method: "POST", body }),
      }
    ),
    register: builder.mutation<BaseResponse, userBody>({
      query: (body) => ({ url: "/register/", method: "POST", body }),
    }),
    logout: builder.mutation<BaseResponse, { refresh: string }>({
      query: (body) => ({ url: "/logout/", method: "POST", body }),
    }),
  }),
});

export const { useLoginMutation } = api;
