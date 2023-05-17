"use client";

import { SCollapse, SFilter, SPanel } from "./filter.styles";

const Filter = () => {
  return (
    <SFilter>
      <SCollapse defaultActiveKey={["1"]}>
        <SPanel header="Дизайнеры" key="1">
          <p>qweqweqew</p>
        </SPanel>
        <SPanel header="Цвет" key="3">
          <p>wqewqewqeqewqwe</p>
        </SPanel>
        <SPanel header="Цена" key="2">
          <p>qweqweewqqwe</p>
        </SPanel>
      </SCollapse>
    </SFilter>
  );
};

export default Filter;
