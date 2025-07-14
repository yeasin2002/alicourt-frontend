import { baseQuery } from "@/lib/rtk-base-query";
import type { SingleChat } from "@/types";
import { createApi } from "@reduxjs/toolkit/query/react";

export type CreateChatBody = { question: string; sender: "user" | "bot" };
export type ChatWithAiBody = { question: string; topic: string };

export const chatApi = createApi({
  reducerPath: "chatApi",
  baseQuery: baseQuery,
  tagTypes: ["chat"],
  endpoints: (builder) => ({
    getAllChatList: builder.query<SingleChat[], number>({
      query: (id) => `chats/?user_id=${id}`,
      providesTags: ["chat"],
    }),
    getChatListByChatId: builder.query<SingleChat[], string>({
      query: (chatId) => `chat/history/?chat_id=${chatId}`,
      providesTags: ["chat"],
    }),

    createAiChat: builder.mutation<SingleChat, ChatWithAiBody>({
      query: (body) => ({ url: "/ai-chat/", method: "POST", body }),
      invalidatesTags: ["chat"],
    }),
  }),
});

export const {
  useGetAllChatListQuery,
  useGetChatListByChatIdQuery,
  useCreateAiChatMutation,
} = chatApi;
