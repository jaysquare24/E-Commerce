import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  style: "",
  topSelling: false,
  newArrival: false,
  price: { min: 0, max: 1000 },
  color: "",
  size: "",
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setStyle: (state, action) => {
      state.style = action.payload;
    },
    setTopSelling: (state, action) => {
      state.topSelling = action.payload;
    },
    setNewArrival: (state, action) => {
      state.newArrival = action.payload;
    },
    setPriceRange: (state, action) => {
      state.price = action.payload;  
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
    setSize: (state, action) => {
      state.size = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const {
  setCategory,
  setStyle,
  setTopSelling,
  setNewArrival,
  setPriceRange,
  setColor,
  setSize,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;

export const selectFilters = (state) => state.filters;
