import type { RootState } from "@shared/lib/constants/Redux";

export const selectorProductList = (state: RootState) => state.product.productList;
