import axiosInstance from '../axiosInstance';

export const createClinic = async (data) => {
  const res = await axiosInstance.post('/clinics/', data);
  return res.data;
};

export const getAllClinics = async () => {
  const res = await axiosInstance.get('/clinics/');
  return res.data;
};

export const getClinicById = async (id) => {
  const res = await axiosInstance.get(`/clinics/${id}`);
  return res.data;
};

export const updateClinic = async (id, data) => {
  const res = await axiosInstance.put(`/clinics/${id}`, data);
  return res.data;
};