"use client";

import ProductPage from "@screens/product";

// const metadata: Metadata = {
//   title: "Товар — ITBE.STORE",
// };

interface ProductPageParams {
  params: {
    id: number;
  };
}

const Product = ({ params }: ProductPageParams) => {
  return <ProductPage {...params} />;
};

export default Product;
