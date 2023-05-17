"use client";

import React from "react";
import Filter from "@widgets/filter";
import ProductList from "@widgets/productList";
import { SProducts } from "./products.styles";

const Products = () => {
  return (
    <SProducts>
      <ProductList />
      <Filter />
    </SProducts>
  );
};

export default Products;
