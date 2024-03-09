import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice.js";
import productReducer from "../features/product/productSlice.js";
import blogSliceReducer from "../features/blog/blogSlice.js";
//create a store
const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    blog: blogSliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

//export the store
export default store;
