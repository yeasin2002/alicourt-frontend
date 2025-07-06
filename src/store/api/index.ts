import { baseQuery } from "@/lib/rtk-base-query";
import { createApi } from "@reduxjs/toolkit/query/react";

// Define types for our API responses and requests
interface Plan {
  id: string;
  title: string;
  duration: number;
  goals: string;
  created_at?: string;
  updated_at?: string;
}

interface CreatePlanRequest {
  title: string;
  duration: number;
  goals: string;
}

export const api = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["users", "chats", "plans"],
  endpoints: (builder) => ({
    // Get all plans
    getPlans: builder.query<Plan[], void>({
      query: () => ({
        url: "/plan/",
        method: "GET",
      }),
      providesTags: ["plans"],
    }),

    // Get a single plan by ID
    getPlanById: builder.query<Plan, string>({
      query: (id) => ({
        url: `/plan/${id}/`,
        method: "GET",
      }),
      providesTags: (_result, _error, id) => [{ type: "plans", id }],
    }),

    // Create a new plan
    createPlan: builder.mutation<Plan, CreatePlanRequest>({
      query: (plan) => ({
        url: "/plan/",
        method: "POST",
        body: plan,
      }),
      invalidatesTags: ["plans"],
    }),

    // Update an existing plan
    updatePlan: builder.mutation<Plan, Partial<Plan> & { id: string }>({
      query: ({ id, ...plan }) => ({
        url: `/plan/${id}/`,
        method: "PATCH",
        body: plan,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: "plans", id }],
    }),

    // Delete a plan
    deletePlan: builder.mutation<void, string>({
      query: (id) => ({
        url: `/plan/${id}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["plans"],
    }),
  }),
});

export const {
  useGetPlansQuery,
  useGetPlanByIdQuery,
  useCreatePlanMutation,
  useUpdatePlanMutation,
  useDeletePlanMutation,
} = api;
