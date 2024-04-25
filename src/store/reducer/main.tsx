import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

const mainSlice = createSlice({
  name: 'mainReducer',
  initialState: {
    isEmpty: false,
    isLoading: false,
  },
  reducers: {
    handleEmpty: state => {
      state.isLoading = true;
      state.isEmpty = true;
    },
  },
});

export const {handleEmpty} = mainSlice.actions;

export const mainSelector = (state: RootState) => state.mainReducer;

export default mainSlice.reducer;
