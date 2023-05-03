import React, { useState } from "react";
import { Collapse } from "antd";
import { StructureKeys } from "@entities/product";
import { SFormItem, SAdvancedFilters, SForm, SSelect } from "./advancedFilters.styles";
import { Categories } from "../model/Items";

const AdvancedFilters = () => {
  const [category, setCategory] = useState<StructureKeys>();
  const [subcategory, setSubcategory] = useState<StructureKeys>();

  const handlerChangeCategory = (value: unknown) => {
    setCategory(value as StructureKeys);
  };
  const handlerChangeSubcategory = (value: unknown) => {
    setSubcategory(value as StructureKeys);
  };

  return (
    <SAdvancedFilters defaultActiveKey={["1"]}>
      <Collapse.Panel header="Рассширенные фильтры" key="1">
        <SForm layout="vertical">
          <SFormItem label="Разделы">
            <SSelect
              defaultValue={Categories && Categories[0].key}
              options={Categories}
              value={category}
              onChange={handlerChangeCategory}
              placeholder="Выберите категорию"
            />
          </SFormItem>

          <SFormItem label="Подкатегории">
            <SSelect
              defaultValue={Categories && Categories[0].key}
              options={Categories}
              value={subcategory}
              onChange={handlerChangeSubcategory}
              placeholder="Выберите категорию"
            />
          </SFormItem>

          <SFormItem label="Дизайнеры">
            <SSelect
              defaultValue={Categories && Categories[0].key}
              options={Categories}
              value={subcategory}
              onChange={handlerChangeSubcategory}
              placeholder="Выберите категорию"
            />
          </SFormItem>

          <SFormItem label="Цена и скидка">
            <SSelect
              defaultValue={Categories && Categories[0].key}
              options={Categories}
              value={subcategory}
              onChange={handlerChangeSubcategory}
              placeholder="Выберите категорию"
            />
          </SFormItem>

          <SFormItem label="Цвета">
            <SSelect
              defaultValue={Categories && Categories[0].key}
              options={Categories}
              value={subcategory}
              onChange={handlerChangeSubcategory}
              placeholder="Выберите категорию"
            />
          </SFormItem>

          <SFormItem label="Цена только со скидками">
            <SSelect
              defaultValue={Categories && Categories[0].key}
              options={Categories}
              value={subcategory}
              onChange={handlerChangeSubcategory}
              placeholder="Выберите категорию"
            />
          </SFormItem>
        </SForm>
      </Collapse.Panel>
    </SAdvancedFilters>
  );
};

export default AdvancedFilters;
