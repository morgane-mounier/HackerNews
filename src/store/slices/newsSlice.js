import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDatas } from "../../services/api";

// penser à reporter le paramètre query ici aussi
export const newsDataAsync = createAsyncThunk(
  "data/news",

  // initier le paramètre query à vide de base
  async ({ query = "", page = 0, tags = "" }) => {
    const data = await fetchDatas(query, page, tags);
    return data;
  }
);

export const newsData = createSlice({
  name: "news",
  initialState: {
    status: "idle",
    news: null,
    nbPages: 0,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(newsDataAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(newsDataAsync.fulfilled, (state, action) => {
        (state.status = "succeeded"),
          (state.news = action.payload.hits),
          (state.nbPages = action.payload.nbPages);
      })
      .addCase(newsDataAsync.rejected, (state, action) => {
        (state.status = "failed"), (state.error = action.payload);
      }),
});

export default newsData.reducer;
