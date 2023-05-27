import React, { FC } from "react";
import { getPriceWithSpace } from "@shared/lib";
import { Tabs, TabsProps } from "antd";
import {
  SButton,
  SColor,
  SGeneralInfo,
  SPrice,
  SSize,
  SSizeGroup,
  STitle,
} from "./generalInfo.styles";

interface GeneralInfoProps {
  title: string;
  color: string;
  price: number;
}

const items: TabsProps["items"] = [
  {
    key: "1",
    label: `Описание`,
    children: `Content of Tab Pane 1`,
  },
  {
    key: "2",
    label: `Размеры`,
    children: `Content of Tab Pane 2`,
  },
  {
    key: "3",
    label: `Доставка`,
    children: `Content of Tab Pane 3`,
  },
];
const GeneralInfo: FC<GeneralInfoProps> = ({ title, color, price }) => {
  return (
    <SGeneralInfo>
      <STitle>{title}</STitle>
      <SColor>{color}</SColor>
      <SPrice>{getPriceWithSpace({ price })}&#8381;</SPrice>

      <SSizeGroup>
        <SSize>XS</SSize>
        <SSize>S</SSize>
        <SSize>M</SSize>
        <SSize>L</SSize>
        <SSize>XL</SSize>
        <SSize>XXL</SSize>
      </SSizeGroup>

      <SButton>Добавить в избранное</SButton>
      <SButton type="primary">Перейти на сайт продавца</SButton>

      <Tabs defaultActiveKey="1" items={items} />
    </SGeneralInfo>
  );
};

export default GeneralInfo;
