import axiosInstance from '../axiosInstance';

export const getAllProducts = async (token) => {
  const res = await axiosInstance.get('/home/products', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};