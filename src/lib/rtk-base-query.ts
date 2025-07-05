import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseQuery = fetchBaseQuery({
  baseUrl: "https://martin-travel-2.onrender.com/api/v1/",

  prepareHeaders: (headers, { getState }) => {
    const state = getState() as { auth?: { accessToken?: string } };
    const token = state.auth?.accessToken || null;

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
