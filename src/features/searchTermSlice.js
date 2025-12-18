import { createSlice } from "@reduxjs/toolkit";

export const searchTermSlice = createSlice({
  name: "searchTerm",
    initialState: "",
    reducers: {
        setSearchTerm: (state, action) => {
            return action.payload.trim().replace(/\s+/g, ' ');
        },
        clearSearchTerm: () => {
            return "";
        }
    }
});

export const { setSearchTerm, clearSearchTerm } = searchTermSlice.actions;

export const selectSearchTerm = (state) => state.searchTerm;

export default searchTermSlice.reducer;