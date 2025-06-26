import { createSlice } from '@reduxjs/toolkit';
import { inventoryData } from './data.js';

const initialState = [];

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    loadData: (state, action) => {
      // ✅ Load the inventory data into the state
      return action.payload || inventoryData; // Fallback to initial data if payload is empty
    },
  },
});

// ✅ Export the action
export const { loadData } = inventorySlice.actions;

// ✅ Export the reducer
export default inventorySlice.reducer;

// ✅ Selector
export const selectInventory = (state) => state.inventory;
