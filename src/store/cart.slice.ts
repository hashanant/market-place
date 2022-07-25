import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TCartItem = { id: string; name: string; price: number; qty: number };
type IInitState = {
  MIN: number;
  MAX: number;
  cartItems: TCartItem[];
  cartTotal: number;
  quantity: number;
};

const initialState = {
  MIN: 0,
  MAX: 5,
  cartItems: [],
  cartTotal: 0,
  quantity: 0,
} as IInitState;

const cartItemSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addItem(state, { payload }: PayloadAction<TCartItem>) {
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
    removeItem(state, { payload }: PayloadAction<TCartItem>) {
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
