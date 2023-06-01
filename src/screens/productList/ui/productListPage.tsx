"use client";

import React, { useState } from "react";
import Filter from "@widgets/filter";
import ProductList from "@widgets/productList";
import { IProduct } from "@shared/model";
import NotFound from "@widgets/notFound";
import Link from "next/link";
import { HouseIcon } from "@shared/assets";
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

const ProductListPage = () => {
  const [isOpenFilter, setOpenFilter] = useState(false);

  const handlerChangeDisplayFilter = () => {
    setOpenFilter(!isOpenFilter);
  };

  const products: IProduct[] = [];

  return products.length ? (
    <SProducts>
      <SContent>
        <SNavigation>
          <SBreadcrumb
            items={[
              {
                title: (
                  <Link href="/">
                    <HouseIcon />
                  </Link>
                ),
              },
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
  ) : (
    <NotFound />
  );
};

export default ProductListPage;
