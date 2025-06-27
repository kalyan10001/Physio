import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://getphysio.in/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;