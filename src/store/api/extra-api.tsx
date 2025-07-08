import { baseQuery } from "@/lib/rtk-base-query";
import type { BaseResponse } from "@/types";
import { createApi } from "@reduxjs/toolkit/query/react";

type CreatePaymentBody = {
  email: string;
  otp: string;
};
export const extraApi = createApi({
  reducerPath: "extraApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    createPayment: builder.mutation<BaseResponse, CreatePaymentBody>({
      query: () => ({ url: "/create-payment/", method: "POST" }),
    }),
  }),
});

export const { useCreatePaymentMutation } = extraApi;
