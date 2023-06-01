"use client";

import React from "react";
import { Formik } from "formik";
import { SForm } from "@widgets/search/ui/search.styles";
import { useRouter } from "next/navigation";
import { initialValues, IInitialValues } from "../model/IForm";
import AdvancedFilters from "./advancedFilters";
import SearchInput from "./searchInput";

const Search = () => {
  const router = useRouter();

  return (
    <Formik<IInitialValues>
      initialValues={initialValues}
      onSubmit={values => {
        let route = `products?categoryId=${values.category}`;

        if (values.gender) route += `&gender=${values.gender}`;
        if (values.searchQuery) route += `&searchQuery=${values.searchQuery}`;

        router.push(route);
      }}
    >
      <SForm>
        <SearchInput />
        <AdvancedFilters />
      </SForm>
    </Formik>
  );
};

export default Search;
