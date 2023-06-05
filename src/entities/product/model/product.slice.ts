import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "@shared/model";

export interface IProductSlice {
  productList: IProduct[];
}

const initialState: IProductSlice = {
  productList: [],
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductList: (state, { payload }: PayloadAction<IProduct[]>) => {
      state.productList = payload;
    },
  },
});

export const { setProductList } = ProductSlice.actions;
export default ProductSlice.reducer;
