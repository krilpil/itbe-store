import { SelectProps } from "antd";
import Structures, { IStructure } from "../../../entities/product/model/Structures";

interface IItems extends Omit<IStructure, "key"> {
  value: IStructure["key"];
}

const Categories: SelectProps<IItems>["options"] = Structures.map(({ label, key }) => ({
  label,
  value: key,
}));

Categories.unshift({
  label: "Не важно",
  value: "default",
});

export { Categories };
