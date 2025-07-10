import axiosInstance from '../axiosInstance';

export const createDoctor = async (data) => {
  const res = await axiosInstance.post('/doctor/', data);
  return res.data;
};

export const getAllDoctors = async () => {
  const res = await axiosInstance.get('/doctor/');
  return res.data;
};

export const getDoctorById = async (id) => {
  const res = await axiosInstance.get(`/doctor/${id}`);
  return res.data;
};

export const updateDoctor = async (id, data) => {
  const res = await axiosInstance.put(`/doctor/${id}`, data);
  return res.data;
};