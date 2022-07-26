import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartItem } from '../types/Common.types';

type TInitState = {
  MIN: number;
  MAX: number;
  cartItems: ICartItem[];
  cartTotal: number;
  quantity: number;
};

const initialState = {
  MIN: 0,
  MAX: 5,
  cartItems: [],
  cartTotal: 0,
  quantity: 0,
} as TInitState;

const cartItemSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addItem(state, { payload }: PayloadAction<ICartItem>) {
      const { id, price, qty } = payload;
      const index = state.cartItems.findIndex((e) => e.id === id);
      if (index < 0) {
        state.cartItems.push({ ...payload });
      } else {
        state.cartItems[index].qty = qty;
      }
      state.cartTotal += price;
      state.quantity++;
    },
    removeItem(state, { payload }: PayloadAction<ICartItem>) {
      const { id, price, qty } = payload;
      const index = state.cartItems.findIndex((e) => e.id === id);
      console.log(qty);
      if (index > -1 && qty > 0) {
        state.cartItems[index].qty--;
      } else {
        state.cartItems.splice(index, 1);
      }
      state.cartTotal -= price;
      state.quantity--;
    },
  },
});

export const cartItemReducer = cartItemSlice.reducer;
export const { addItem, removeItem } = cartItemSlice.actions;
