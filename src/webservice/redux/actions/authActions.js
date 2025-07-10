import ApiService from '../../services/Api';
import {
  sendOtpStart,
  sendOtpSuccess,
  sendOtpFailure,
  verifyOtpStart,
  verifyOtpSuccess,
  verifyOtpFailure,
} from '../slices/authSlice';

export const sendOtp = (phone) => async (dispatch) => {
    console.log('Sending OTP to:', phone);
  dispatch(sendOtpStart());
  try {
    console.log('Calling ApiService.sendOtp with phone:', phone);
    const response = await ApiService.sendOtp(phone);
    console.log('Response from sendOtp:', response);
    if (response.data === null || response.success === false) {
      console.error('Failed to send OTP in authActions:', response.message);
      dispatch(sendOtpFailure(response.message || 'Failed to send OTP'));
    } else {
      dispatch(sendOtpSuccess());
    console.log('OTP sent successfully:', response.data);
    }
  } catch (error) {
    dispatch(sendOtpFailure('Network error'));
  }
};

export const verifyOtp = ({ phone, otp }) => async (dispatch) => {
  dispatch(verifyOtpStart());
  try {
    const response = await ApiService.verifyOtp(phone, otp);
    if (!response.success || !response.token) {
      dispatch(verifyOtpFailure(response.message || 'Invalid OTP'));
    } else {
      dispatch(verifyOtpSuccess({ user: response.user, token: response.token }));
    }
  } catch (error) {
    dispatch(verifyOtpFailure(error.message || 'Network error'));
  }
};
