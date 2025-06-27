import axiosInstance from '../axiosInstance';

export const createAppointment = async (data) => {
  const res = await axiosInstance.post('/appointments/', data);
  return res.data;
};

export const getAllAppointments = async () => {
  const res = await axiosInstance.get('/appointments/');
  return res.data;
};

export const getAppointmentById = async (id) => {
  const res = await axiosInstance.get(`/appointments/${id}`);
  return res.data;
};

export const updateAppointment = async (id, data) => {
  const res = await axiosInstance.put(`/appointments/${id}`, data);
  return res.data;
};