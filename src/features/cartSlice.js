import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { name, price, img } = action.payload;

      const existingItem = state[name];
      const quantity = existingItem ? existingItem.quantity + 1 : 1;

      state[name] = {
        price,
        quantity,
        img
      };
    },

    removeItem: (state, action) => {
      const { name } = action.payload;

      if (state[name]) {
        delete state[name];
      }

    },

    clearCart: () => {
      return {};
    },

    changeItemQuantity: (state, action) => {
      const { name, quantity } = action.payload;

      if (state[name]) {
        state[name].quantity = quantity;
        
      }
    },
  },
});


export const { addItem, changeItemQuantity, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;

export const selectCart = (state) => state.cart;
export const selectCartItem = (name) => (state) => state.cart[name];

export const selectTotalQuantity = (state) =>
  Object.values(state.cart).reduce((total, item) => total + item.quantity, 0);

export const selectTotalPrice = (state) =>
  Object.values(state.cart).reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
