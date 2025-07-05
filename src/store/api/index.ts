import { baseQuery } from "@/lib/rtk-base-query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["users", "chats"],
  endpoints: () => ({}),
});
