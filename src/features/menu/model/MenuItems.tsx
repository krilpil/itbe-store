import { MenuProps } from "antd";
import { IStructures } from "@entities/product";
import Link from "next/link";

// TODO: Исправить ошибку возврата из несуществующей категории
const MenuItems: MenuProps["items"] = IStructures.map(({ label, key, children }) => ({
  label: (
    <Link style={{ color: "inherit" }} href={`products?categoryId=${key}`}>
      {label}
    </Link>
  ),
  key,
  children: children?.map(childrenItem => ({ label: childrenItem.label, key: childrenItem.key })),
}));
export default MenuItems;
