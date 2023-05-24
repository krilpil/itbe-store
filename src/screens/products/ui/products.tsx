"use client";

import React from "react";
import Filter from "@widgets/filter";
import ProductList from "@widgets/productList";
import { useDevice } from "@shared/lib";
import { Breadcrumb } from "antd";
import { SContent, SNavigation, SProducts, SSelect, STitle, SToolbar } from "./products.styles";

const Products = () => {
  const { isLaptops } = useDevice();

  return (
    <SProducts>
      <SContent>
        <SNavigation>
          {isLaptops || (
            <Breadcrumb
              separator=">"
              items={[
                { title: "Мужское", href: "" },
                { title: "Обувь", href: "" },
                { title: "Кроссовки", href: "" },
              ]}
            />
          )}
          <STitle>Кроссовки</STitle>
        </SNavigation>

        <SToolbar>
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
          <p>34021 товаров</p>
        </SToolbar>

        <ProductList />
      </SContent>

      {isLaptops || <Filter />}
    </SProducts>
  );
};

export default Products;
