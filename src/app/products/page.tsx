import { Metadata } from "next";
import Products from "@screens/productList";

const ProductsPage = () => {
  return <Products />;
};

export const metadata: Metadata = {
  title: "Список товаров — ITBE.STORE",
};

export default ProductsPage;
