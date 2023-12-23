import { configureStore } from "@reduxjs/toolkit";
import authSlice from '../Slice/Register';
import authReducer from "../Slice/Auth";

const Store = configureStore({
  reducer: {
    user:authSlice,
    auth: authReducer,
  },
});
export default Store;

