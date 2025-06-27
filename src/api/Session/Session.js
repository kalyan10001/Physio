import axiosInstance from '../axiosInstance';

export const createSession = async (data) => {
  const res = await axiosInstance.post('/sessions/', data);
  return res.data;
};

export const getAllSessions = async () => {
  const res = await axiosInstance.get('/sessions/');
  return res.data;
};

export const getSessionById = async (id) => {
  const res = await axiosInstance.get(`/sessions/${id}`);
  return res.data;
};

export const updateSession = async (id, data) => {
  const res = await axiosInstance.put(`/sessions/${id}`, data);
  return res.data;
};