import { configureStore } from '@reduxjs/toolkit';
import { customersReducer } from './customers/slice';

export const store = configureStore({
  reducer: {
    customers: customersReducer,
  },
});
