import React from "react";
import products from "@shared/mock/products";
import Card from "./card";
import { SProductList } from "./productList.styles";

const ProductList = () => {
  return (
    <SProductList>
      {products.map(({ id, ...props }) => (
        <Card key={id} {...props} />
      ))}
    </SProductList>
  );
};

export default ProductList;
