import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { authApi } from "./api/auth-api";
import persistReducer from "./persist-reducer";

export const initialStore = configureStore({
  reducer: persistReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        ignoredActionPaths: [
          "register",
          "rehydrate",
          "meta.baseQueryMeta.request",
          "meta.baseQueryMeta.response",
        ],
      },
    }).concat(authApi.middleware),
});

export const store = persistStore(initialStore);

export type RootState = ReturnType<typeof initialStore.getState>;
export type AppDispatch = typeof initialStore.dispatch;
