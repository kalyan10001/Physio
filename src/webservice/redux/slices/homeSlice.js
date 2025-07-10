import { createSlice } from '@reduxjs/toolkit';

const sectionState = { data: [], loading: false, error: null };

const initialState = {
  services: { ...sectionState },
  products: { ...sectionState },
  healthTips: { ...sectionState },
  testimonials: { ...sectionState },
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    // Services
    servicesStart: (s) => {
      s.services.loading = true;
      s.services.error = null;
    },
    servicesSuccess: (s, a) => {
      console.log('🔥 Reducer got services:', a.payload);
      s.services.loading = false;
      s.services.data = a.payload;
    },
    servicesFailure: (s, a) => {
      s.services.loading = false;
      s.services.error = a.payload;
    },

    // Products
    productsStart: (s) => {
      s.products.loading = true;
      s.products.error = null;
    },
    productsSuccess: (s, a) => {
      s.products.loading = false;
      s.products.data = a.payload;
    },
    productsFailure: (s, a) => {
      s.products.loading = false;
      s.products.error = a.payload;
    },

    // Health Tips
    healthTipsStart: (s) => {
      s.healthTips.loading = true;
      s.healthTips.error = null;
    },
    healthTipsSuccess: (s, a) => {
      s.healthTips.loading = false;
      s.healthTips.data = a.payload;
    },
    healthTipsFailure: (s, a) => {
      s.healthTips.loading = false;
      s.healthTips.error = a.payload;
    },

    // Testimonials
    testimonialsStart: (s) => {
      s.testimonials.loading = true;
      s.testimonials.error = null;
    },
    testimonialsSuccess: (s, a) => {
      s.testimonials.loading = false;
      s.testimonials.data = a.payload;
    },
    testimonialsFailure: (s, a) => {
      s.testimonials.loading = false;
      s.testimonials.error = a.payload;
    },
  },
});

export const {
  servicesStart,
  servicesSuccess,
  servicesFailure,
  productsStart,
  productsSuccess,
  productsFailure,
  healthTipsStart,
  healthTipsSuccess,
  healthTipsFailure,
  testimonialsStart,
  testimonialsSuccess,
  testimonialsFailure,
} = homeSlice.actions;

export default homeSlice.reducer;

