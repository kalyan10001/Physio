import axiosInstance from '../axiosInstance';

export const getAllUsers = async () => {
  const res = await axiosInstance.get('/user/getall');
  return res.data;
};

export const updateUser = async (id, userData) => {
  const res = await axiosInstance.post(`/user/update/${id}`, userData);
  return res.data;
};
