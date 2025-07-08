import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authApi } from "./api";

import authReducer from "./features/authSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "chat"],
};
const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
