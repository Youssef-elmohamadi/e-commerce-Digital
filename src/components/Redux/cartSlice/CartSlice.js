import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({ ...newItem, quantity: 1 });
        state.totalPrice += newItem.price;
        state.totalQuantity++;
      } else {
        existingItem.quantity++;
        state.totalPrice += newItem.price;
        state.totalQuantity++;
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        state.totalPrice -= existingItem.price;
        existingItem.quantity--;
        state.totalQuantity--;
        if (existingItem.quantity === 0) {
          state.items = state.items.filter((item) => item.id !== id);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity = quantity;
        state.totalQuantity = state.items.reduce(
          (total, item) => total + item.quantity,
          0
        );
        state.totalPrice = state.items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      }
    },
  },
});

export const { addItem, removeItem, clearCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
