import ApiService from '../../services/Api';
import {
  servicesStart,
  servicesSuccess,
  servicesFailure,
  productsStart,
  productsSuccess,
  productsFailure,
  healthTipsStart,
  healthTipsSuccess,
  healthTipsFailure,
} from '../slices/homeSlice';

export const fetchServices = () => async (dispatch, getState) => {
  dispatch(servicesStart());
  const token = getState().auth.token;
  const res = await ApiService.getServices(token);
  console.log('Token in fetchServices:', token);
  console.log('Response from fetchServices:', res);
  res.success
    ? dispatch(servicesSuccess(res.data))
    : dispatch(servicesFailure(res.message));
};

export const fetchProducts = () => async (dispatch, getState) => {
  dispatch(productsStart());
  const token = getState().auth.token;
  const res = await ApiService.getProducts(token);
  console.log('Token in fetchProducts:', token);
  console.log('Response from fetchProducts:', res);
  res.success
    ? dispatch(productsSuccess(res.data))
    : dispatch(productsFailure(res.message));
};

export const fetchHealthTips = () => async (dispatch, getState) => {
  dispatch(healthTipsStart());
  const token = getState().auth.token;
  const res = await ApiService.getHealthTips(token);
  console.log('Token in fetchHealthTips:', token);
  console.log('Response from fetchHealthTips:', res);
  res.success
    ? dispatch(healthTipsSuccess(res.data))
    : dispatch(healthTipsFailure(res.message));
};
