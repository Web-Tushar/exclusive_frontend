import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './Allslice/Countslice'
import { productApi } from './Allslice/Api/productApi'

export const store = configureStore({
  reducer: {
    counterSlice,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})