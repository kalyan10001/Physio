import axiosInstance from '../axiosInstance';

export const createTreatmentPlan = async (data) => {
  const res = await axiosInstance.post('/treatmentplan/', data);
  return res.data;
};

export const getAllTreatmentPlans = async () => {
  const res = await axiosInstance.get('/treatmentplan/');
  return res.data;
};

export const getTreatmentPlanById = async (id) => {
  const res = await axiosInstance.get(`/treatmentplan/${id}`);
  return res.data;
};

export const updateTreatmentPlan = async (id, data) => {
  const res = await axiosInstance.put(`/treatmentplan/${id}`, data);
  return res.data;
};