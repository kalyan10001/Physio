import axiosInstance from '../axiosInstance';

export const createTherapist = async (data) => {
  const res = await axiosInstance.post('/therapist/', data);
  return res.data;
};

export const getAllTherapists = async () => {
  const res = await axiosInstance.get('/therapist/');
  return res.data;
};

export const getTherapistById = async (id) => {
  const res = await axiosInstance.get(`/therapist/${id}`);
  return res.data;
};

export const updateTherapist = async (id, data) => {
  const res = await axiosInstance.put(`/therapist/${id}`, data);
  return res.data;
};