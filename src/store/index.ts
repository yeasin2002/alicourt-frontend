/* eslint-disable @typescript-eslint/no-explicit-any */
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

import { chatApi, classApi, planApi } from "./api";
import { authApi } from "./api/auth-api";
import { extraApi } from "./api/extra-api";
import authReducer from "./features/authSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [chatApi.reducerPath]: chatApi.reducer,
  [classApi.reducerPath]: classApi.reducer,
  [planApi.reducerPath]: planApi.reducer,
  [extraApi.reducerPath]: extraApi.reducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(
      authApi.middleware as any,
      chatApi.middleware as any,
      classApi.middleware as any,
      planApi.middleware as any,
      extraApi.middleware as any
    );
  },
});
const persistor = persistStore(store);

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { persistor, store };
export type { AppDispatch, RootState };
