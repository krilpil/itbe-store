import ProductPage from "@screens/product";
import { Metadata } from "next";

interface ProductPageParams {
  params: {
    id: number;
  };
}

export function generateMetadata({ params }: ProductPageParams): Metadata {
  return {
    title: params.id.toString(),
  };
}

export default function Product({ params }: ProductPageParams) {
  return <ProductPage {...params} />;
}
