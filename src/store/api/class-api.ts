import { baseQuery } from "@/lib/rtk-base-query";
import type { BaseResponse, SingleClass } from "@/types";
import { createApi } from "@reduxjs/toolkit/query/react";

type CreateClassBody = {
  title: string;
  date: string;
  description: string;
};

export const classApi = createApi({
  reducerPath: "classApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getClasses: builder.query<BaseResponse, void>({
      query: () => "/class/",
    }),
    createClasses: builder.mutation<SingleClass, CreateClassBody>({
      query: (body) => ({ url: "/class/", method: "POST", body }),
    }),
  }),
});

export const { useGetClassesQuery, useCreateClassesMutation } = classApi;
