"use client";

import React from "react";
import Filter from "@widgets/filter";
import ProductList from "@widgets/productList";
import { SProducts, SSelect, SSortingWithProducts } from "./products.styles";

const Products = () => {
  return (
    <SProducts>
      <SSortingWithProducts>
        <SSelect
          defaultValue="1"
          options={[
            { value: "1", label: "По популярности" },
            { value: "2", label: "По возрастанию цены" },
            { value: "3", label: "По убыванию цены" },
            { value: "4", label: "По новинкам" },
            { value: "5", label: "По скидкам" },
          ]}
        />
        <ProductList />
      </SSortingWithProducts>
      <Filter />
    </SProducts>
  );
};

export default Products;
