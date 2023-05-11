import { useState } from "react";
import { Collapse } from "antd";
import { StructureKeys } from "@entities/product";
import { useFormikContext } from "formik";
import { IInitialValues } from "@widgets/search/model/IForm";
import { SFormItem, SAdvancedFilters, SForm, SSelect } from "./advancedFilters.styles";
import { Categories, SubCategories, IList } from "../../model/Category";

const AdvancedFilters = () => {
  const { values, setFieldValue } = useFormikContext<IInitialValues>();

  const [subcategoryList, setSubcategoryList] = useState<IList>([]);

  const handlerChangeCategory = (value: unknown) => {
    setFieldValue("category", value);
    setSubcategoryList(SubCategories(value as StructureKeys));
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
              placeholder="Выберите категорию"
            />
          </SFormItem>

          <SFormItem label="Дизайнеры">
            <SSelect
              defaultValue={Categories && Categories[0].value}
              options={Categories}
              placeholder="Выберите категорию"
            />
          </SFormItem>

          <SFormItem label="Цена и скидка">
            <SSelect
              defaultValue={Categories && Categories[0].value}
              options={Categories}
              placeholder="Выберите категорию"
            />
          </SFormItem>

          <SFormItem label="Цвета">
            <SSelect
              defaultValue={Categories && Categories[0].value}
              options={Categories}
              placeholder="Выберите категорию"
            />
          </SFormItem>

          <SFormItem label="Цена только со скидками">
            <SSelect
              defaultValue={Categories && Categories[0].value}
              options={Categories}
              placeholder="Выберите категорию"
            />
          </SFormItem>
        </SForm>
      </Collapse.Panel>
    </SAdvancedFilters>
  );
};

export default AdvancedFilters;
