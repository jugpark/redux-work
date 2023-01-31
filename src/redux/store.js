import { configureStore } from '@reduxjs/toolkit'

import listReducer from './services/list/listSlice';

export const store = configureStore({
  reducer: {
    list: listReducer,
  },
})
