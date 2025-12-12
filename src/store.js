import { configureStore } from '@reduxjs/toolkit';

import inventoryReducer from './features/inventorySlice.js';
import cartReducer from './features/cartSlice.js';
import currencyFilterReducer from './features/currencyFilterSlice.js';
import searchTermReducer from './features/searchTermSlice.js';
import filterReducer  from './features/filterSlice.js';

// Correct: wrap your reducers in a 'reducer' object
export const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
    cart: cartReducer,
    currencyFilter: currencyFilterReducer,
    searchTerm: searchTermReducer,
    filters: filterReducer
  }
});