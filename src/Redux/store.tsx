import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducers from 'Redux/reducers';

const store = configureStore({
  reducer: reducers,
  middleware: [...getDefaultMiddleware({ serializableCheck: false, immutableCheck: false })],
});

export default store;
