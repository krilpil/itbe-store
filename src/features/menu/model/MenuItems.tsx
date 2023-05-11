import { MenuProps } from "antd";
import { IStructures } from "@entities/product";

const MenuItems: MenuProps["items"] = IStructures.map(({ label, key, children }) => ({
  label,
  key,
  children: children?.map(childrenItem => ({ label: childrenItem.label, key: childrenItem.key })),
}));
export default MenuItems;
