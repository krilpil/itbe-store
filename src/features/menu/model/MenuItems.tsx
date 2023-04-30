import { MenuProps } from "antd";

enum MenuKeys {
  clothing,
  shoes,
  accessories,
}

const MenuItems: MenuProps["items"] = [
  {
    label: "Одежда",
    key: MenuKeys.clothing,
  },
  {
    label: "Обувь",
    key: MenuKeys.shoes,
  },
  {
    label: "Аксессуары",
    key: MenuKeys.accessories,
  },
];

export default MenuItems;
