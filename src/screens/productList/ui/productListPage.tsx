"use client";

import React, { FC, useEffect, useState } from "react";
import Filter from "@widgets/filter";
import ProductList from "@widgets/productList";
import Link from "next/link";
import { HouseIcon } from "@shared/assets";
import { getProducts } from "@shared/api";

import { useAppDispatch, useAppSelector } from "@shared/lib";
import { selectorProductList, setProductList } from "@entities/product";
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

interface IProductListProps {
  categoryId: string | null;
  gender: string | null;
  searchQuery: string | null;
}

const ProductListPage: FC<IProductListProps> = ({ categoryId, gender, searchQuery }) => {
  const dispatch = useAppDispatch();

  const [isOpenFilter, setOpenFilter] = useState(false);

  const products = useAppSelector(selectorProductList);

  const handlerChangeDisplayFilter = () => {
    setOpenFilter(!isOpenFilter);
  };

  useEffect(() => {
    dispatch(getProducts({ categoryId, gender, searchQuery }))
      .unwrap()
      .then(newProducts => {
        dispatch(setProductList(newProducts));
      });
  }, []);

  return (
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
  );
};

export default ProductListPage;
