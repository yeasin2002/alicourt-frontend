import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseQuery = fetchBaseQuery({
  baseUrl: "https://49ae-115-127-156-9.ngrok-free.app/api",

  prepareHeaders: (headers, { getState }) => {
    const state = getState() as { auth?: { access?: string } };
    const token = state.auth?.access || null;
    console.log("token: ", token);

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
          window.location.href = "/login";
        }
      }
    }

    return headers;
  },
});
