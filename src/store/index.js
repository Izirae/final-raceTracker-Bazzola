import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "./auth.action";
import recordSlice from "./record.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    record: recordSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
