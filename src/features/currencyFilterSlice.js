import { createSlice } from '@reduxjs/toolkit';

const initialState = 'USD';
 export const currencyFilterSlice = createSlice({
  name: 'currencyFilter',
  initialState,

  reducers: {
    setCurrency: (state, action) => action.payload,
  },
});

export const { setCurrency } = currencyFilterSlice.actions;

export default currencyFilterSlice.reducer;

export const selectCurrencyFilter = (state) => state.currencyFilter;

