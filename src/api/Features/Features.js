import axiosInstance from '../axiosInstance';

export const getAllFeatures = async (token) => {
  const res = await axiosInstance.get('/home/features', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};