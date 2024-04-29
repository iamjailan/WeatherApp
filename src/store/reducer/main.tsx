import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';
import APIRequest from '../../helper/request';

export const handleGetCurrentWeather = createAsyncThunk(
  'mainReducer/all',
  async () => {
    try {
      const res = await APIRequest('GET', '&q=kabul');
      if (res) {
        return res;
      } else {
        throw new Error(res.message);
      }
    } catch (error: any) {
      throw new Error(error);
    }
  },
);

interface dataType {
  data: Record<string, any>;
  isLoading: boolean;
  error: string;
}

const initialState: dataType = {
  isLoading: false,
  error: '',
  data: {},
};

const mainSlice = createSlice({
  name: 'mainReducer',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(handleGetCurrentWeather.pending as any, state => {
      state.isLoading = true;
    });
    builder.addCase(
      handleGetCurrentWeather.fulfilled as any,
      (state, action) => {
        state.data = action?.payload;
        state.isLoading = false;
      },
    );
    builder.addCase(
      handleGetCurrentWeather.rejected as any,
      (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      },
    );
  },
});

export const weatherSelector = (state: RootState) => state.mainReducer;

export default mainSlice.reducer;
