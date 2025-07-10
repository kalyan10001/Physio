import axiosInstance from '../axiosInstance';

export const sendOtp = async (phone) => {
  const res = await axiosInstance.post('/send-otp', { phone: `+91${phone}` });
  return res.data;
};

export const verifyOtp = async (phone, code) => {
  const res = await axiosInstance.post('/verify-otp', {
    phone: `+91${phone}`,
    code,
  });
  return res.data;
};
