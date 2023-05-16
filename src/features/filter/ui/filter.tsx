"use client";

import { Collapse } from "antd";
import { SFilter } from "./filter.styles";

const Filter = () => {
  return (
    <SFilter>
      <Collapse defaultActiveKey={["1"]} ghost>
        <Collapse.Panel header="Дизайнеры" key="1">
          <p>qweqweqew</p>
        </Collapse.Panel>
        <Collapse.Panel header="Цена" key="2">
          <p>qweqweewqqwe</p>
        </Collapse.Panel>
        <Collapse.Panel header="Цвет" key="3">
          <p>wqewqewqeqewqwe</p>
        </Collapse.Panel>
      </Collapse>
    </SFilter>
  );
};

export default Filter;
