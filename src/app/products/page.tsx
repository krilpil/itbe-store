import { Metadata } from "next";
import Products from "@screens/productList";
import { getProducts } from "@shared/api";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Список товаров — ITBE.STORE",
};

interface ProductPageProps {
  searchParams: {
    categoryId: number;
  };
}

export default async function ProductsPage({ searchParams }: ProductPageProps) {
  const { categoryId } = searchParams;
  const products = await getProducts({ categoryId });

  if (!products.length) {
    notFound();
    return null;
  }

  return <Products products={products} />;
}
