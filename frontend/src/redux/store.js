import { configureStore } from "@reduxjs/toolkit";
import { defaultReducer } from "./reducers";

export const store = configureStore({
  reducer: defaultReducer,
});
