import styled from "styled-components";
import { Segmented, Input, Select, Space, Tag } from "antd";

import { MagnifyingGlassIcon } from "@shared/assets";

export const SSearch = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const SSegmented = styled(Segmented)`
  display: flex;
  align-self: center;
  width: max-content;
`;

export const SWrapper = styled.div`
  display: grid;
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

export const SSelect = styled(Select).attrs({
  dropdownMatchSelectWidth: false,
})`
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
  allowClear: true,
})`
  & .ant-input-affix-wrapper,
  & .ant-btn {
    height: 100%;
  }

  & .ant-input-search-button > span {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const STagList = styled.div`
  max-width: 100%;
  display: grid;
  grid-auto-flow: column;
  overflow: auto;
  width: 100%;
  gap: 10px;

  &::-webkit-scrollbar {
    display: none;
  }

  & .ant-tag {
    margin-inline-end: 0;
  }
`;

export const STag = styled(Tag).attrs({
  bordered: false,
})`
  display: grid;
  position: relative;
`;

export const SMagnifyingGlassIcon = styled(MagnifyingGlassIcon)`
  max-width: none;
`;
