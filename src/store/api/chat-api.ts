import { baseQuery } from "@/lib/rtk-base-query";
import type { BaseResponse } from "@/types";
import { createApi } from "@reduxjs/toolkit/query/react";

export type CreateChatBody = { question: string; sender: "user" | "bot" };
export type ChatWithAiBody = { question: string; topic: string };


export const chatApi = createApi({
  reducerPath: "chatApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getAllChatList: builder.query({ query: () => "/chat/" }),
    createChat: builder.mutation<BaseResponse, CreateChatBody>({
      query: (body) => ({ url: "/chat/", method: "POST", body }),
    }),
    chatWithAI: builder.mutation<BaseResponse, ChatWithAiBody>({
      query: (body) => ({ url: "/ai-chat/", method: "POST", body }),
    }),
    getChat: builder.query({ query: (id) => `chats/?user_id=${id}` }),
  }),
});

export const { useGetAllChatListQuery } = chatApi;
