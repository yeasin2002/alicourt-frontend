import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://martin-travel-2.onrender.com/api/v1/",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prepareHeaders: (headers, { getState }: { getState: any }) => {
    const token = getState().auth?.accessToken || null;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    } else {
      const storedAuth = localStorage.getItem("auth");
      if (storedAuth) {
        try {
          const authData = JSON.parse(storedAuth);
          if (authData?.access) {
            headers.set("authorization", `Bearer ${authData.access}`);
          }
        } catch (error) {
          console.error("Failed to parse auth from localStorage:", error);
        }
      }
    }

    return headers;
  },
});

export const api = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["users", "chats"],
  endpoints: () => ({}),
});
