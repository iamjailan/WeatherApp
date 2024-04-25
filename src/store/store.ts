import {configureStore} from '@reduxjs/toolkit';
import mainReducer from './rootReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createMigrate, persistReducer, persistStore} from 'redux-persist';

const migration = {
  0: (state: any) => {
    return {
      ...state,
    };
  },
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 0,
  migrate: createMigrate(migration),
};

const persistedReducer = persistReducer(persistConfig, mainReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

export type RootState = ReturnType<typeof store.getState>;
export const appPersist = persistStore(store);
