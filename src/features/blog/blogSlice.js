import { createSlice } from "@reduxjs/toolkit";
import { getAllBlog, getSIngleBlog } from "./blogApiSlice.js";

// create initialState
const initialState = {
  blog: [],
  singleBlog: null,
  isLoading: false,
  isError: null,
  message: null,
};

// create a new slice
const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setMessageEmpty: (state, action) => {
      state.isError = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    // get all blog
    builder
      .addCase(getAllBlog.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
        state.blog = [];
      })
      .addCase(getAllBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.blog = action.payload;
      })
      //get single color
      .addCase(getSIngleBlog.pending, (state, action) => {
        state.isLoading = true;
        state.singleBlog = null;
      })
      .addCase(getSIngleBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
        state.singleBlog = null;
      })
      .addCase(getSIngleBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.singleBlog = action.payload.blog;
      });
  },
});

// Actions
export const { setMessageEmpty } = blogSlice.actions;

//selector for blog state
export const getBlog = (state) => state.blog;

//reducer
export default blogSlice.reducer;
