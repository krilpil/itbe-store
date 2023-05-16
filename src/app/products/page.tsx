import { Metadata } from "next";
import Menu from "@features/menu";
import Products from "@screens/products";
import Filter from "@features/filter";

const ProductsPage = () => {
  return (
    <>
      <Menu />
      <Products />
      <Filter />
    </>
  );
};

export const metadata: Metadata = {
  title: "Список товаров — ITBE.STORE",
};

export default ProductsPage;
