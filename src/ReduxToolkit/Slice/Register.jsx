import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//import process.env.REACT_APP_API_KEY from "../../config";


const initialState = {
  loading: false,
  error: null,
  smg: null,
  token: null,
};

export const SinUpUser = createAsyncThunk("sinUpUser", async (user) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_API_KEY}/api/v1/auth`, user, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("SinUpUser", res);
    return res.data;
  } catch (error) {
    console.log("Axios error:", error);
    throw error;
  }
});



const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUpRequest: (state) => {
        state.loading = true;
        state.error = null;
      },
      signUpSuccess: (state) => {
        state.loading = false;
        state.error = null;
      },
      signUpFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(SinUpUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(SinUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload.message;
        state.token = action.payload.data.token;
        const { error, smg } = action.payload;
        if (error) {
          state.error = error;
        } else {
          state.smg = smg;
        }
      })
      .addCase(SinUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },  
   
});
export const { signUpRequest, signUpSuccess, signUpFailure } = authSlice.actions;
export default authSlice.reducer;
