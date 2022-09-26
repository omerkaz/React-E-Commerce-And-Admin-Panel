import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    list: [],
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.list = [...state.list, action.payload];
      state.totalPrice = state.totalPrice + action.payload.price;
    },
    removeItem: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload.id);
      state.totalPrice = Math.abs(state.totalPrice - action.payload.price);
    },
    totalPricePlus: (state, action) => {
      state.totalPrice = state.totalPrice + action.payload;
    },
    totalPriceMinus: (state, action) => {
      state.totalPrice = Math.abs(state.totalPrice - action.payload);
    },
  },
});

export const cartList = (state) => state.cart;
export default cartSlice.reducer;
export const { addItem, removeItem, totalPriceMinus, totalPricePlus } =
  cartSlice.actions;
