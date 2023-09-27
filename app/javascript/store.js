import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './features/greetings/greetingsSlice';

const store = configureStore({
  reducers: {
    greeting: greetingReducer,
  }
})

export default store;