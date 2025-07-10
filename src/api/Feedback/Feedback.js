import axiosInstance from '../axiosInstance';

export const createFeedback = async (data) => {
  const res = await axiosInstance.post('/feedback/', data);
  return res.data;
};

export const getAllFeedback = async () => {
  const res = await axiosInstance.get('/feedback/');
  return res.data;
};

export const getFeedbackById = async (id) => {
  const res = await axiosInstance.get(`/feedback/${id}`);
  return res.data;
};

export const updateFeedback = async (id, data) => {
  const res = await axiosInstance.put(`/feedback/${id}`, data);
  return res.data;
};