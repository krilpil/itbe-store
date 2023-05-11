import { SList, SMenu } from "@features/menu/ui/menu.styles";
import { useState } from "react";
import { MenuProps } from "antd";
import MenuItems from "../model/MenuItems";

const Menu = () => {
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const handlerOpenChange: MenuProps["onOpenChange"] = keys => {
    const currentKey = keys.at(-1) || "";
    setOpenKeys(currentKey ? [currentKey] : []);
  };

  return (
    <SMenu>
      <SList items={MenuItems} openKeys={openKeys} onOpenChange={handlerOpenChange} />
    </SMenu>
  );
};

export default Menu;
