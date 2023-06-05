import { IProduct } from "@shared/model";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface IGetProductsReq {
  searchQuery: string | null;
  categoryId: string | null;
  gender: string | null;
}

type IGetProductsRes = IProduct[];

const getProducts = createAsyncThunk<IGetProductsRes, IGetProductsReq>(
  "product/getProducts",
  ({ searchQuery, categoryId, gender }) => {
    const searchParams = new URLSearchParams();

    if (categoryId) searchParams.append("categoryId", categoryId);
    if (gender) searchParams.append("gender", gender);
    if (searchQuery) searchParams.append("categoryId", searchQuery);

    return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products?${searchParams.toString()}`, {
      method: "GET",
      next: { revalidate: 3600 },
    }).then(products => {
      return products.json();
    });
  }
);

export default getProducts;
