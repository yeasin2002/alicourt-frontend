import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { api } from "./api";

import authReducer from "./features/authSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "chat"],
};
const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
