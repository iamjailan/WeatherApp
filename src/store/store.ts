import {configureStore} from '@reduxjs/toolkit';
import mainReducer from './rootReducer';

export const store = configureStore({
  reducer: mainReducer,
});

export type RootState = ReturnType<typeof store.getState>;
