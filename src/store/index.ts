import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import persistReducer from "./persist-reducer";

export const initialStore = configureStore({
  reducer: persistReducer,
});

export const store = persistStore(initialStore);

export type RootState = ReturnType<typeof initialStore.getState>;
export type AppDispatch = typeof initialStore.dispatch;
