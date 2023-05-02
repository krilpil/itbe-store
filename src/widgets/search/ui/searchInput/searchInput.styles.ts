import styled from "styled-components";
import { Input, Select, Space } from "antd";

export const SSearchInput = styled(Space.Compact)`
  height: 50px;
  width: 100%;

  .ant-input-wrapper {
    height: 100%;
  }
`;

export const SSelect = styled(Select)`
  & .ant-select-selector:has(.ant-select-selection-search) {
    height: 100%;
  }

  & .ant-select-selection-item {
    display: flex;
    align-self: center;
  }
`;

export const SInput = styled(Input.Search).attrs({
  placeholder: "Например, Adidas Y-3 Kaiwa",
  enterButton: "Поиск",
  allowClear: true,
})`
  & .ant-input-affix-wrapper,
  & .ant-btn {
    height: 100%;
  }
`;
