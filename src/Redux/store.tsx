import { configureStore } from '@reduxjs/toolkit';
import reducers from 'Redux/reducers';

const store = configureStore({
  reducer: reducers,
});

export default store;
