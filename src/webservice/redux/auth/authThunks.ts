import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiService from '../../services/Api';

export const sendOtpThunk = createAsyncThunk(
  'auth/sendOtp',
  async (phone: string, { rejectWithValue }) => {
    try {
      const response = await ApiService.sendOtp(phone);
      if (!response.success) {
        return rejectWithValue(response.message || 'Failed to send OTP');
      }
      return response;
    } catch (error) {
      return rejectWithValue('Network error');
    }
  }
);

export const verifyOtpThunk = createAsyncThunk(
  'auth/verifyOtp',
  async (
    { phone, otp }: { phone: string; otp: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await ApiService.verifyOtp(phone, otp);
      if (!response.success) {
        return rejectWithValue(response.message || 'Invalid OTP');
      }
      return {
        token: response.token,
        user: response.user,
      };
    } catch (error) {
      return rejectWithValue('Network error');
    }
  }
);
