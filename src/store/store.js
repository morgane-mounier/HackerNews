import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./slices/newsSlice";
import { newsDataAsync } from "./slices/newsSlice";

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

store.dispatch(newsDataAsync);

export default store;
