import axiosInstance from '../axiosInstance';

export const createPayment = async (data) => {
  const res = await axiosInstance.post('/payments/', data);
  return res.data;
};

export const getAllPayments = async () => {
  const res = await axiosInstance.get('/payments/');
  return res.data;
};

export const getPaymentById = async (id) => {
  const res = await axiosInstance.get(`/payments/${id}`);
  return res.data;
};

export const updatePayment = async (id, data) => {
  const res = await axiosInstance.put(`/payments/${id}`, data);
  return res.data;
};