import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk("auth/loginUser", async (credentials, thunkAPI) => {
  try {
    // Make your API request here, e.g. using axios
    // const response = await axios.post(`${process.env.REACT_APP_API_KEY}/api/v1/login`, credentials);
    // const user = response.data;

    // Simulating a successful login
    const user = { id: 1, email: credentials.email }; // Replace with actual user data

    return user;
  } catch (error) {
    throw new Error("Login failed. Please check your credentials.");
  }
});
