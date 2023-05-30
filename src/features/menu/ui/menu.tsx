"use client";

import { SList } from "@features/menu/ui/menu.styles";
import { MenuProps } from "antd";
import { useRouter } from "next/navigation";
import MenuItems from "../model/MenuItems";

const Menu = () => {
  const router = useRouter();

  const handlerOnSelect: MenuProps["onSelect"] = categoryId => {
    router.push(`products?categoryId=${categoryId.key}`);
  };

  return (
    <menu>
      <SList items={MenuItems} onSelect={handlerOnSelect} />
    </menu>
  );
};

export default Menu;
