"use client";

import React from "react";
import Link from "next/link";
import Filter from "@features/filter";
import { SProducts } from "./products.styles";

const Products = () => {
  return (
    <SProducts>
      <div>
        <Link href="/">Назад</Link>
        <p>qweqweeqw</p>
      </div>
      <Filter />
    </SProducts>
  );
};

export default Products;
