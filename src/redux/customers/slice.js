import { createSlice } from '@reduxjs/toolkit';
import { fetchCustomers } from './operations';

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const customersSlice = createSlice({
  name: 'customers',
  initialState: {
    customers: [],
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCustomers.pending, handlePending)
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.customers = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchCustomers.rejected, handleRejected);
  },
});

export const customersReducer = customersSlice.reducer;
