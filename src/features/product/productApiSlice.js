import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl.js";

// get All Product
export const getAllProduct = createAsyncThunk(
  "product/getAllProduct",
  async () => {
    try {
      const response = await axios.get(`${baseUrl}/product/all`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

// get a single Product
export const getSingleProduct = createAsyncThunk(
  "Product/getSingleProduct",
  async (slug) => {
    try {
      const response = await axios.get(`${baseUrl}/product/${slug}`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
