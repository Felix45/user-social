import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
} from 'redux-persist';
import authSlice from './slices/authSlice';
import profileSlice from './slices/profileSlice';
import peopleSlice from './slices/peopleSlice';
import albumSlice from './slices/albumSlice';
import photoSlice from './slices/photoSlice';
import albumDetailSlice from './slices/albumDetailSlice';

const persistConfig = { key: 'database', storage };
const reducers = combineReducers({
  user: authSlice,
  profile: profileSlice,
  people: peopleSlice,
  albums: albumSlice,
  photos: photoSlice,
  album: albumDetailSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);
export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
