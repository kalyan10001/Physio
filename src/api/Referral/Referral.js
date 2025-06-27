import axiosInstance from '../axiosInstance';

export const createReferral = async (data) => {
  const res = await axiosInstance.post('/referrals/', data);
  return res.data;
};

export const getAllReferrals = async () => {
  const res = await axiosInstance.get('/referrals/');
  return res.data;
};

export const getReferralById = async (id) => {
  const res = await axiosInstance.get(`/referrals/${id}`);
  return res.data;
};

export const updateReferral = async (id, data) => {
  const res = await axiosInstance.put(`/referrals/${id}`, data);
  return res.data;
};