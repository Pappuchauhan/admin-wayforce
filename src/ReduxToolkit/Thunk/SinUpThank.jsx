import {signUpRequest, signUpSuccess, signUpFailure} from '../Slice/Register';

import process.env.REACT_APP_API_KEY from '../../config';
import axios from 'axios';

export const signUp = (userData) => async (dispatch) => {
  try {
    dispatch(signUpRequest());
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_KEY}/api/v1/auth`, userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Sign Up Response:", res.data); // Corrected log statement
      dispatch(signUpSuccess(res.data)); // Corrected data source
    } catch (error) {
      console.log("Axios error:", error);
      dispatch(signUpFailure(error.message));
    }
  } catch (error) {
    dispatch(signUpFailure(error.message));
  }
};