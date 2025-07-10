import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  otpSent: false,
  isAuthenticated: false,
  token: null,
  userData: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    sendOtpStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    sendOtpSuccess: (state) => {
      state.loading = false;
      state.otpSent = true;
    },
    sendOtpFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    verifyOtpStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    verifyOtpSuccess: (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.userData = action.payload.user;
      state.isAuthenticated = true;
    },
    verifyOtpFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.userData = null;
    },
  },
});

export const {
  sendOtpStart,
  sendOtpSuccess,
  sendOtpFailure,
  verifyOtpStart,
  verifyOtpSuccess,
  verifyOtpFailure,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
