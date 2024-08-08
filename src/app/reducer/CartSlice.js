import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  // item_pre: 0,
  item_pre: localStorage.getItem('item_pre') ? parseInt(localStorage.getItem('item_pre')) : 0,
  data:{},
}

const cartDataFromStorage = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : [];


export const CartSlice = createSlice({
  name: 'counter',
  // initialState,
  initialState:{
    ...initialState,
    value: cartDataFromStorage, // Initialize cart data from local storage
  },
  reducers: {
    increment: (state, action) => {
      const index1 = state.value.find(item => item.id === action.payload.id);
      if (index1) {
        index1.qty += 1;
      }
      localStorage.setItem('cart', JSON.stringify(state.value));
      localStorage.setItem('item_pre', state.item_pre);
      // state.value += 1
    },
    decrement: (state, action) => {
      // state.value -= 1
      const index1 = state.value.find(item => item.id === action.payload.id);
      if (index1.qty > 1) {
        index1.qty -= 1;
        state.item_pre -= 1;
        localStorage.setItem('item_pre', state.item_pre);
      }
      localStorage.setItem('cart', JSON.stringify(state.value));
      // localStorage.setItem('item_pre', state.item_pre);
    },
    cartdata: (state, action) => {
      const index = state.value.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.value[index].qty += 1;
      } else {
        state.value.push({ ...action.payload, qty: 1 });
        state.item_pre += 1;
        localStorage.setItem('item_pre', state.item_pre);
      }
      localStorage.setItem('cart', JSON.stringify(state.value));
    },

    removedata: (state, action) => {
      state.value = state.value.filter(item => item.id !== action.payload.id);
      localStorage.setItem('cart', JSON.stringify(state.value));
      state.item_pre -= 1;
      if (state.item_pre < 0) {
        state.item_pre = 0;
      }
      if (state.value.length === 0) {
        localStorage.removeItem('item_pre'); // Remove item_pre from local storage
      } else {
        localStorage.setItem('item_pre', state.item_pre);
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, removedata, cartdata , storeData } = CartSlice.actions

export default CartSlice.reducer