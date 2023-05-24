"use client";

import { SelectProps } from "antd";
import { SCollapse, SFilter, SPanel, SSelect, SSlider } from "./filter.styles";

const designItems: SelectProps["options"] = [
  { value: "Adidas", label: "Adidas" },
  { value: "Nike", label: "Nike" },
  { value: "Puma", label: "Puma" },
  { value: "Y-3", label: "Y-3" },
];

const colorItems: SelectProps["options"] = [
  { value: "Черный", label: "Черный" },
  { value: "Белый", label: "Белый" },
  { value: "Красный", label: "Красный" },
  { value: "Синий", label: "Синий" },
  { value: "Зеленый", label: "Зеленый" },
  { value: "Разноцветный", label: "Разноцветный" },
];

const Filter = () => {
  return (
    <SFilter>
      <SCollapse defaultActiveKey={["1"]}>
        <SPanel header="Дизайнеры" key="1">
          <SSelect placeholder="Все дизайнеры" options={designItems} />
        </SPanel>
        <SPanel header="Цвет" key="3">
          <SSelect placeholder="Все цвета" options={colorItems} />
        </SPanel>
        <SPanel header="Цена" key="2">
          <SSlider
            defaultValue={[0, 100_000]}
            marks={{
              0: "0",
              100_000: "100к",
            }}
          />
        </SPanel>
      </SCollapse>
    </SFilter>
  );
};

export default Filter;
