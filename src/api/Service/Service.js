import axiosInstance from '../axiosInstance';

export const getAllServices = async (token) => {
  const res = await axiosInstance.get('/home/services', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};