import { baseQuery } from "@/lib/rtk-base-query";
import type { BaseResponse } from "@/types";
import { createApi } from "@reduxjs/toolkit/query/react";

export type CreatePlanBody = {
  title: string;
  duration: number;
  goals: string;
};

export const planApi = createApi({
  reducerPath: "planApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getPlans: builder.query<BaseResponse, void>({
      query: () => "/plan/",
    }),
    createPlans: builder.mutation({
      query: (body: CreatePlanBody) => ({
        url: "/plan/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetPlansQuery, useCreatePlansMutation } = planApi;
