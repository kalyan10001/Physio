import axiosInstance from '../axiosInstance';

export const getAllHealthTips = async () => {
  const res = await axiosInstance.get('/health/gethealthtips');
  return res.data;
};