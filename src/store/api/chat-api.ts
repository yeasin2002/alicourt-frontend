import { baseQuery } from "@/lib/rtk-base-query";
import type { BaseResponse, SingleChat } from "@/types";
import { createApi } from "@reduxjs/toolkit/query/react";

export type CreateChatBody = { question: string; sender: "user" | "bot" };
export type ChatWithAiBody = { question: string; topic: string };

export const chatApi = createApi({
  reducerPath: "chatApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getAllChatList: builder.query<SingleChat[], number>({
      query: (id) => `chats/?user_id=${id}`,
    }),
    getChatListByChatId: builder.query<SingleChat[], number>({
      query: (chatId) => `chat/history/?chat_id=${chatId}`,
    }),

    createAiChat: builder.mutation<BaseResponse, ChatWithAiBody>({
      query: (body) => ({ url: "/ai-chat/", method: "POST", body }),
    }),
  }),
});

export const {
  useGetAllChatListQuery,
  useGetChatListByChatIdQuery,
  useCreateAiChatMutation,
} = chatApi;
