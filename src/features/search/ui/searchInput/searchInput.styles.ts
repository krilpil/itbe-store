import styled from "styled-components";
import { Input, Select, Space, Tag } from "antd";

export const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const SSelectWithInput = styled(Space.Compact)`
  height: 56px;
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

export const STagList = styled.div`
  display: flex;
  justify-self: center;
  width: 100%;
  gap: 10px;
  overflow: hidden;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  & .ant-tag {
    margin-inline-end: 0;
  }
`;

export const STag = styled(Tag).attrs({
  bordered: false,
})``;
