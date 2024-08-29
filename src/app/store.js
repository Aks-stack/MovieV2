import { configureStore } from '@reduxjs/toolkit';
import isMobileReducer from '../features/isMobileSlice';

export const store = configureStore({
  reducer: {
    isMobile: isMobileReducer,
  },
});
