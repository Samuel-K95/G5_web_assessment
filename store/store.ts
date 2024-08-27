import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "./service/blog-service";

export const store = () => {
  return configureStore({
    reducer: {
      [blogApi.reducerPath]: blogApi.reducer,
    },
    middleware: (getDefauleMiddleWare) =>
      getDefauleMiddleWare().concat(blogApi.middleware),
  });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
