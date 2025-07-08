import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authApi } from "./api/auth-api";

import authReducer from "./features/authSlice";
import { chatApi } from "./api/chat-api";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "chat"],
};
const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [chatApi.reducerPath]: chatApi.reducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
