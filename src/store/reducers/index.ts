import { configureStore } from '@reduxjs/toolkit'


import api from 'src/services/api';

import cartReducer from './cart';  

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware) 
})

export type RootReducer = ReturnType<typeof store.getState>
