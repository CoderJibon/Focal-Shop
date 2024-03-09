import { createSlice } from "@reduxjs/toolkit";
import {
  addWIshList,
  forgotPasswordMail,
  getAllWishlist,
  loggedInUser,
  logout,
  resetPassword,
  userLogin,
  userRegistration,
} from "./authApiSlice.js";
import { loggedInAdmin } from "../../../../focal-admin/src/features/Auth/authApiSlice.js";

// create a initialState
const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  wishlist: [],
  isLoading: false,
  isError: null,
  message: null,
};

//create slice
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setMessageEmpty: (state, action) => {
      state.isError = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    //create a use register
    builder
      .addCase(userRegistration.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(userRegistration.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
      .addCase(userRegistration.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.message = action.payload.message;
      })
      //  user login
      .addCase(userLogin.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isError = action.error.message;
        state.message = null;
        state.isLoading = false;
        state.user = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isError = null;
        state.message = action.payload.message;
        state.isLoading = false;
        state.user = action.payload.user;
        console.log(action.payload.user);
        if (action.payload.user) {
          localStorage.setItem("user", JSON.stringify(action.payload.user));
        }
      })
      // loggedInUser
      .addCase(loggedInUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loggedInAdmin.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        //state.isError = action.error.message;
        localStorage.removeItem("user");
      })
      .addCase(loggedInAdmin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.message = null;
        if (action.payload) {
          localStorage.setItem("user", JSON.stringify(action.payload));
        }
      })
      // logout administration
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.message = action.payload.message;
        localStorage.removeItem("user");
      })
      //forgot password mail send
      .addCase(forgotPasswordMail.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(forgotPasswordMail.rejected, (state, action) => {
        state.isError = action.error.message;
        state.isLoading = false;
      })
      .addCase(forgotPasswordMail.fulfilled, (state, action) => {
        state.isError = null;
        state.message = action.payload.message;
        state.isLoading = false;
      })
      //Reset new password
      .addCase(resetPassword.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isError = action.error.message;
        state.isLoading = false;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isError = null;
        state.message = action.payload.message;
        state.isLoading = false;
      })
      //Add product wishlist
      .addCase(addWIshList.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addWIshList.rejected, (state, action) => {
        state.isLoading = false;
        //action.error.message
        state.isError = "You Cannot Add Wishlist Without Login";
      })
      .addCase(addWIshList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.wishlist = action.payload.wishlist;
        state.message = action.payload.message;
      })
      //get all product wishlist
      .addCase(getAllWishlist.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
      .addCase(getAllWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.wishlist = action.payload.Wishlist;
        state.message = action.payload.message;
      });
  },
});

//action
export const { setMessageEmpty } = authSlice.actions;

//reducer
export default authSlice.reducer;
