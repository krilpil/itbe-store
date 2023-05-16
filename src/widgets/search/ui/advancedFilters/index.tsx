"use client";

import { useState } from "react";
import { Collapse } from "antd";
import { useFormikContext } from "formik";
import { IInitialValues } from "@widgets/search/model/IForm";
import ColorList from "@widgets/search/model/Colors";
import {
  SFormItem,
  SAdvancedFilters,
  SForm,
  SSelect,
  SSlider,
  STagSelect,
  SCheckbox,
} from "./advancedFilters.styles";
import { Categories, SubCategories, IList } from "../../model/Category";
import BrandList from "../../model/Brands";
import PriceMarks from "../../model/Price";

const AdvancedFilters = () => {
  const { values, setFieldValue } = useFormikContext<IInitialValues>();

  const [subcategoryList, setSubcategoryList] = useState<IList>([]);

  const handlerChangeCategory = (value: unknown) => {
    setFieldValue("category", value);
    setSubcategoryList(SubCategories(value as string));
  };

  return (
    <SAdvancedFilters defaultActiveKey={["1"]}>
      <Collapse.Panel header="Рассширенные фильтры" key="1">
        <SForm>
          <SFormItem label="Разделы" valuePropName="category">
            <SSelect
              value={values.category}
              options={Categories}
              onChange={handlerChangeCategory}
              placeholder="Выберите категорию"
            />
          </SFormItem>

          <SFormItem label="Подкатегории" valuePropName="subCategory">
            <SSelect
              value={values.subCategory}
              options={subcategoryList}
              onChange={e => setFieldValue("subCategory", e)}
              disabled={!subcategoryList?.length}
              placeholder="Выберите подкатегорию"
            />
          </SFormItem>

          <SFormItem label="Дизайнеры" valuePropName="brand">
            <SSelect
              value={values.brand}
              options={BrandList}
              onChange={e => setFieldValue("brand", e)}
              placeholder="Выберите бренд"
            />
          </SFormItem>

          <SFormItem label="Цена" valuePropName="price">
            <SSlider
              value={values.price}
              onChange={e => setFieldValue("price", e)}
              marks={PriceMarks}
            />
          </SFormItem>

          <SFormItem label="Цвета" valuePropName="colors">
            <STagSelect
              value={values.colors}
              onChange={e => setFieldValue("colors", e)}
              options={ColorList}
              placeholder="Выберите цвет"
            />
          </SFormItem>

          <SFormItem label="Скидки" valuePropName="isDiscounts">
            <SCheckbox
              checked={values.isDiscounts}
              onChange={e => setFieldValue("isDiscounts", e.target.checked)}
            >
              Показывать только со скидками
            </SCheckbox>
          </SFormItem>
        </SForm>
      </Collapse.Panel>
    </SAdvancedFilters>
  );
};

export default AdvancedFilters;
