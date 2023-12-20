import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDatas } from "../../services/api";

// penser à reporter le paramètre query ici aussi
export const newsDataAsync = createAsyncThunk("data/news", async (query) => {
  const data = await fetchDatas(query);
  return data;
});

export const newsData = createSlice({
  name: "news",
  initialState: {
    status: "idle",
    news: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(newsDataAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(newsDataAsync.fulfilled, (state, action) => {
        (state.status = "succeeded"), (state.news = action.payload);
      })
      .addCase(newsDataAsync.rejected, (state, action) => {
        (state.status = "failed"), (state.error = action.payload);
      }),
});

export default newsData.reducer;
