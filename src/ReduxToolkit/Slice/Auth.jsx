import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//import process.env.REACT_APP_API_KEY from "../../config";

const initialState = {
  user: null,
  error: null,
  isLoading: false,
  token: null,
};

export const loginUser = createAsyncThunk("auth/loginUser", async (credentials) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_API_KEY}/api/v1/auth/loginAdmin`, credentials, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("loginUser", res);
    return res.data;
  } catch (error) {
    console.log("Axios error:", error);
    throw new Error("Login failed. Please check your credentials.");
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.token = action.payload.data.token;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
