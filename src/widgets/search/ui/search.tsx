import React from "react";
import { Formik } from "formik";
import { SForm } from "@widgets/search/ui/search.styles";
import { initialValues, IInitialValues } from "../model/IForm";
import AdvancedFilters from "./advancedFilters";
import SearchInput from "./searchInput";

const Search = () => {
  return (
    <Formik<IInitialValues>
      initialValues={initialValues}
      onSubmit={values => {
        console.log(values);
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
