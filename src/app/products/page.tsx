import { Metadata } from "next";
import Products from "@screens/productList";

export const metadata: Metadata = {
  title: "Список товаров — ITBE.STORE",
};

interface ISearchParams {
  searchParams: {
    categoryId?: string;
    gender?: string;
    searchQuery?: string;
  };
}

export default async function ProductsPage({ searchParams }: ISearchParams) {
  return (
    <Products
      categoryId={searchParams.categoryId || null}
      searchQuery={searchParams.searchQuery || null}
      gender={searchParams.gender || null}
    />
  );
}
