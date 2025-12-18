import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id, name, price, img, qty, color, size, discountPrice} = action.payload;
      const existingItem = state[id];
      const quantity = existingItem ? existingItem.quantity + qty : qty;

      state[id] = {
        name,
        price,
        discountPrice,
        quantity,
        img, 
        color,
        size
      };
    },

    removeItem: (state, action) => {
      const { id } = action.payload;

      if (state[id]) {
        delete state[id];
      }
    },

    clearCart: () => {
      return {};
    },

    changeItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      if (quantity <= 0) {
        delete state[id];
      } else {
        state[id].quantity = quantity;
      }
    },
  },
});


export const { addItem, changeItemQuantity, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;

export const selectCart = (state) => state.cart;
export const selectCartItem = (id) => (state) => state.cart[id];


