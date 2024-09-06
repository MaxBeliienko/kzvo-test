import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://api.mockaroo.com/api/fe338b90';
const API_KEY = 'ef78bea0';

const asyncThunkWrapper = asyncFunction => async (args, thunkAPI) => {
  try {
    return await asyncFunction(args, thunkAPI);
  } catch (error) {
    const serializableError = {
      message: error.message,
      name: error.name,
      code: error.code,
      response: error.response
        ? {
            status: error.response.status,
            data: error.response.data,
          }
        : undefined,
    };
    return thunkAPI.rejectWithValue(serializableError);
  }
};

export const fetchCustomers = createAsyncThunk(
  'customers/all',
  asyncThunkWrapper(async () => {
    const { data } = await axios.get(`/?key=${API_KEY}`);
    return data;
  })
);
