import { Metadata } from "next";
import Products from "@screens/productList";
import { IProduct } from "@shared/model";

export const metadata: Metadata = {
  title: "Список товаров — ITBE.STORE",
};

// TODO: Вынести в запрос и добавить переменный адрес
const getProducts = async (): Promise<IProduct[]> => {
  const response = await fetch("http://localhost:3000/api/products", {
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) throw new Error("Failed to fetch data");

  return response.json();
};

export default async function ProductsPage() {
  const products = await getProducts();

  return <Products products={products} />;
}
