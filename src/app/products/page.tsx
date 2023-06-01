import { Metadata } from "next";
import Products from "@screens/productList";

export const metadata: Metadata = {
  title: "Список товаров — ITBE.STORE",
};

// interface ProductPageProps {
//   searchParams: {
//     categoryId: string;
//     gender?: string;
//     searchQuery?: string;
//   };
// }

export default async function ProductsPage() {
  // const { searchQuery } = searchParams;
  // const categoryId = Number(searchParams.categoryId);
  // const gender = Number(searchParams.gender);
  //
  // const products = await getProducts({ categoryId, gender, searchQuery });

  return <Products />;
}
