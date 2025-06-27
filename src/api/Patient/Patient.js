import axiosInstance from '../axiosInstance';

export const createPatient = async (data) => {
  const res = await axiosInstance.post('/patients', data);
  return res.data;
};

export const getAllPatients = async () => {
  const res = await axiosInstance.get('/patients');
  return res.data;
};

export const getPatientById = async (id) => {
  const res = await axiosInstance.get(`/patients/${id}`);
  return res.data;
};

export const updatePatient = async (id, data) => {
  const res = await axiosInstance.put(`/patients/${id}`, data);
  return res.data;
};