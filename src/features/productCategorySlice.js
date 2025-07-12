import { createSlice } from "@reduxjs/toolkit";

const productCategorySlice = createSlice({
  name: "productCategory",
    initialState: "",
    reducers: {
        setProductCategory: (state, action) => {
            return action.payload.toLowerCase().trim();
        },
        clearProductCategory: () => {
            return "";
        }
    }
});

export const { setProductCategory, clearProductCategory } = productCategorySlice.actions;
export const selectProductCategory = (state) => state.productCategory;
export default productCategorySlice.reducer;