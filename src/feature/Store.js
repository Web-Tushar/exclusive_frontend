import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './Allslice/Countslice'

export const store = configureStore({
  reducer: {
    counterSlice
  },
})