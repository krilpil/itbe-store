import React, { useState } from "react";
import { Collapse, Select } from "antd";
import { StructureKeys } from "@entities/product";
import { SAdvancedFilters } from "./advancedFilters.styles";
import { Categories } from "../model/Items";

const AdvancedFilters = () => {
  const [category, setCategory] = useState<StructureKeys>();
  const [subcategory, setSubcategory] = useState<StructureKeys>();

  const handlerChangeCategory = (value: StructureKeys) => {
    setCategory(value);
  };
  const handlerChangeSubcategory = (value: StructureKeys) => {
    setSubcategory(value);
  };

  return (
    <SAdvancedFilters defaultActiveKey={["1"]}>
      <Collapse.Panel header="Рассширенные фильтры" key="1">
        <Select
          defaultValue={Categories && Categories[0].key}
          options={Categories}
          value={category}
          onChange={handlerChangeCategory}
          placeholder="Выберите категорию"
        />

        <Select
          defaultValue={Categories && Categories[0].key}
          options={Categories}
          value={subcategory}
          onChange={handlerChangeSubcategory}
          placeholder="Выберите категорию"
        />
      </Collapse.Panel>
    </SAdvancedFilters>
  );
};

export default AdvancedFilters;
