import { combineReducers } from "@reduxjs/toolkit";
import { ProductSlice } from "@entities/product";

const rootReducer = combineReducers({
  product: ProductSlice,
});

export default rootReducer;
