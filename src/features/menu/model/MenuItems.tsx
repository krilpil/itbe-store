import { MenuProps } from "antd";
import { Structures } from "@entities/product";

const MenuItems: MenuProps["items"] = Structures.map(({ label, key, children }) => ({
  label,
  key,
  children: children?.map(childrenItem => ({ label: childrenItem.label, key: childrenItem.key })),
}));
export default MenuItems;
