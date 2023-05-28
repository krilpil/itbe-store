"use client";

import React, { FC, useState } from "react";
import Filter from "@widgets/filter";
import ProductList from "@widgets/productList";
import { IProduct } from "@shared/model";
import {
  SBreadcrumb,
  SContent,
  SButtonFilters,
  SNavigation,
  SProducts,
  SSelect,
  STitle,
  SToolbar,
  SCount,
  SRightBar,
  SDrawer,
} from "./productListPage.styles";

interface ProductListProps {
  products: IProduct[];
}

const ProductListPage: FC<ProductListProps> = ({ products }) => {
  const [isOpenFilter, setOpenFilter] = useState(false);

  const handlerChangeDisplayFilter = () => {
    setOpenFilter(!isOpenFilter);
  };

  return (
    <SProducts>
      <SContent>
        <SNavigation>
          <SBreadcrumb
            items={[
              { title: "Мужское", href: "" },
              { title: "Обувь", href: "" },
              { title: "Кроссовки", href: "" },
            ]}
          />

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

          <SButtonFilters onClick={handlerChangeDisplayFilter}>Фильтры</SButtonFilters>

          <SCount>34021 товаров</SCount>
        </SToolbar>

        <ProductList products={products} />
      </SContent>

      <SRightBar>
        <Filter />
      </SRightBar>

      <SDrawer open={isOpenFilter} onClose={handlerChangeDisplayFilter}>
        <Filter />
      </SDrawer>
    </SProducts>
  );
};

export default ProductListPage;
