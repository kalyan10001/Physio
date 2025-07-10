import axios from 'axios';
import AppConstants from '../constants/AppConstants';
import { useDispatch, useSelector } from 'react-redux';


const ApiService = {

  sendOtp: async (phone) => {
    try{
    const res = await axios.post(
      `${AppConstants.BASE_URL}${AppConstants.getOtpUrl}`,
      { phone : phone}
    );
    console.log('Response from sendOtp:', res.data);
    return {
      success: res.data.code === 200,
      message: res.data.message,
      data: res.data.data,
    };
    } catch (error) {
      console.error('Error sending OTP in apiservice:', error);

  const fallbackMessage =
    error?.response?.data?.message || // server-provided error
    error?.message ||                // axios-generated error
    'Something went wrong. Please try again.';

  return {
    success: false,
    message: fallbackMessage,
    data: null,
  };
    }
  },

  verifyOtp: async (phone, otp) => {
    const res = await axios.post(
      `${AppConstants.BASE_URL}${AppConstants.verifyOtpUrl}`,
      { phone, otp }
    );

    const responseData = res.data;

    return {
      success: responseData.code === 200,
      message: responseData.message,
      user: responseData.data,
      token: responseData.data?.accessToken || null,
    };
  },

    getServices: async (token) => {
    try {
      const res = await axios.get(`${AppConstants.BASE_URL}home/services`,
        {
          headers:{"Authorization": `Bearer ${token}`}
       });
      return { success: true, data: res.data.data };
    } catch (err) {
      console.error('Error fetching services:', err);
      return { success: false, message: err.message };
    }
  },

  getProducts: async (token) => {
    console.log('Token in getProducts:', token);
    try {
      const res = await axios.get(`${AppConstants.BASE_URL}home/products`,
       {
          headers:{"Authorization": `Bearer ${token}`}
       }
      );
      console.log('Response from getProducts:', res.data);
      return { success: true, data: res.data.data };
    } catch (err) {
      console.error('Error fetching products:', err);
      return { success: false, message: err.message };
    }
  },

  getHealthTips: async (token) => {
    try {
      const res = await axios.get(`${AppConstants.BASE_URL}health/gethealthtips`,{
          headers:{"Authorization": `Bearer ${token}`}
       });
      return { success: true, data: res.data.data };
    } catch (err) {
      console.error('Error fetching health tips:', err);
      return { success: false, message: err.message };
    }
  },

  getTestimonials: async () => {
    try {
      const res = await axios.get(`${AppConstants.BASE_URL}home/testimonials`,{
          headers:{"Authorization": `Bearer ${token}`}
       });
      return { success: true, data: res.data.data };
    } catch (err) {
      console.error('Error fetching testimonials:', err);
      return { success: false, message: err.message };
    }
  },
  
};

export default ApiService;
