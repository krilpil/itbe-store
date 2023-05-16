import { SelectProps } from "antd";
import IStructures, { IStructure } from "@entities/product/model/IStructures";

interface IItems extends Omit<IStructure, "key"> {
  value: IStructure["key"];
}

type IList = SelectProps<IItems>["options"];

const Categories: IList = IStructures.map(({ label, key }) => ({
  label,
  value: key,
}));

Categories.unshift({
  label: "Все категории",
  value: "0",
});

const SubCategories = (categoryKey?: string): IList => {
  const subCategories = IStructures.find(value => {
    return value.key === categoryKey;
  });

  return subCategories?.children?.map(({ key, label }) => ({
    label,
    value: key,
  }));
};

export { Categories, SubCategories, type IList };
