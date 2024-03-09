import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../utils/baseUrl.js";
import axios from "axios";

// register new user
export const userRegistration = createAsyncThunk(
  "auth/userRegistration",
  async (data) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/register`, data, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// user Login
export const userLogin = createAsyncThunk("auth/userLogin", async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/auth/login`, data, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// stay user Login
export const loggedInUser = createAsyncThunk("auth/loggedInUser", async () => {
  try {
    const response = await axios.get(`${baseUrl}/auth/logged-in-user`, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

//forgot password
export const userForgotPassword = createAsyncThunk(
  "auth/userForgotPassword",
  async (data) => {
    try {
      const response = await axios.post(
        `${baseUrl}/auth/user/forget-password`,
        data,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//Logout
export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    const response = await axios.get(`${baseUrl}/auth/logout`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// forgot password mail send
export const forgotPasswordMail = createAsyncThunk(
  "auth/forgotPasswordMail",
  async (mail) => {
    try {
      const response = await axios.post(
        `${baseUrl}/auth/user/forget-password`,
        mail,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// reset password mail set
export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async ({ password, token }) => {
    try {
      const response = await axios.post(
        `${baseUrl}/auth/user/reset-password/${token}`,
        { password },
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// get All Orders
// export const getAllOrder = createAsyncThunk("order/getAllOrder", async () => {
//     try {
//       const response = await axios.get(`${baseUrl}/user/get-all-orders`, {
//         withCredentials: true,
//       });
//       return response.data;
//     } catch (error) {
//       throw new Error(error.response.data.message);
//     }
//   });

// delete order
//   export const DeleteOrder = createAsyncThunk("order/DeleteOrder", async (id) => {
//     try {
//       const response = await axios.delete(
//         `${baseUrl}/user/get-all-orders/order/${id}`,
//         {
//           withCredentials: true,
//         }
//       );
//       return response.data;
//     } catch (error) {
//       throw new Error(error.response.data.message);
//     }
//   });

//profileUpdate
export const ProfileUpdate = createAsyncThunk(
  "auth/ProfileUpdate",
  async ({ id, formData }) => {
    try {
      const response = await axios.put(`${baseUrl}/user/${id}`, formData, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// add products wishlist
export const addWIshList = createAsyncThunk("user/addWIshList", async (id) => {
  try {
    const response = await axios.put(
      `${baseUrl}/user/wishlist`,
      {
        productId: id,
      },
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// get all wishlist
export const getAllWishlist = createAsyncThunk(
  "user/getAllWishlist",
  async () => {
    try {
      const response = await axios.get(`${baseUrl}/user/wishlist`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
