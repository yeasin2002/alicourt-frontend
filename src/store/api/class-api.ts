import { baseQuery } from "@/lib/rtk-base-query";
import type { SingleClass } from "@/types";
import { createApi } from "@reduxjs/toolkit/query/react";

type ClassItems = {
  id: string;
  title: string;
  description: string;
};

export const classApi = createApi({
  reducerPath: "classApi",
  baseQuery: baseQuery,
  tagTypes: ["class"],
  endpoints: (builder) => ({
    getClasses: builder.query<ClassItems[], void>({
      query: () => ({
        url: "/class/",
        headers: { "ngrok-skip-browser-warning": "true" },
      }),
      providesTags: ["class"],
    }),
    createClasses: builder.mutation<SingleClass, ClassItems>({
      query: (body) => ({ url: "/class/", method: "POST", body }),
      invalidatesTags: [{ type: "class" }],
    }),
  }),
});

export const { useGetClassesQuery, useCreateClassesMutation } = classApi;
