import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './reducer/CartSlice'

export const store = configureStore({
  reducer: {
    counter: CartSlice,
  },

// Inside your component or wherever you want to check the Redux store state

})