// src/features/currencyFilter/currencyFilterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = 'USD';

const currencyFilterSlice = createSlice({
  name: 'currencyFilter',
  initialState,

  reducers: {
    setCurrency: (state, action) => action.payload,
  },
});

// Export the action
export const { setCurrency } = currencyFilterSlice.actions;

// Export the reducer
export default currencyFilterSlice.reducer;

// Export a selector
export const selectCurrencyFilter = (state) => state.currencyFilter;

