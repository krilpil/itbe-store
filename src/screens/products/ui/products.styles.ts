import styled from "styled-components";
import { Select } from "antd";

export const SProducts = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(max-content, 250px);
  width: 100%;
`;

export const SSortingWithProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SSelect = styled(Select).attrs({
  bordered: false,
  popupMatchSelectWidth: true,
})`
  width: max-content;

  &.ant-select-single .ant-select-selector {
    padding-left: 0;
  }
`;
