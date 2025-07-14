import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_API_URL,

  prepareHeaders: (headers, { getState }) => {
    const state = getState() as { auth?: { access?: string } };
    const token = state.auth?.access || null;
    headers.set("ngrok-skip-browser-warning", "true");

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
