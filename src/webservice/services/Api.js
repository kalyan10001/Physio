import AppConstants from '../constants/AppConstants';

const headers = {
  'Content-Type': 'application/json',
  "Authorization": `Bearer ${Token}`
};

const ApiService = {
  sendOtp: async (phone) => {
    const endpoint = AppConstants.BASE_URL + AppConstants.getOtpUrl;
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers,
        body: JSON.stringify({ mobile: phone }),
      });
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  verifyOtp: async (phone, otp) => {
    const endpoint = AppConstants.BASE_URL + AppConstants.verifyOtpUrl;
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers,
        body: JSON.stringify({ mobile: phone, otp }),
      });
      return await response.json(); // Should include { token, user }
    } catch (error) {
      throw error;
    }
  },
};

export default ApiService;
