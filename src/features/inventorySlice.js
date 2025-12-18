import { createSlice } from '@reduxjs/toolkit';
import { inventoryData } from './data.js';


export const inventorySlice = createSlice({
  name: 'inventory',
  initialState: {
    allItems : inventoryData,
    filteredItems : []
  },
  reducers: {
    loadData: (state, action) => {
      //Load the inventory data into the state
      state.allItems = action.payload || inventoryData; // Fallback to initial data if payload is empty
      state.filteredItems = [];
    },

    filterDataByCategory: (state, action) => {
      const {nomalizedValue, type} = action.payload;
      
      state.filteredItems = state.allItems.filter(item => {
        if(type==='category'){
          return item.category.toLowerCase().trim() === nomalizedValue
        }

        if(type==='style'){
          return item.styles.some(style => style.toLowerCase().trim() === nomalizedValue)
        }

        if(type === 'new-arrival'){
          return item.newArrival;
        }
        
        if(type === 'top-selling'){
          return item.topSelling;
        }

        return false;
      })
      
    }
  },
});

export const { loadData, filterDataByCategory } = inventorySlice.actions;

export default inventorySlice.reducer;

export const selectInventory = (state) => state.inventory.allItems;
export const selectFilteredItem =(state) => state.inventory.filteredItems;
