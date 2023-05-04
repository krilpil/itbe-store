import styled from "styled-components";
import { Collapse, Form, Select } from "antd";

export const SAdvancedFilters = styled(Collapse).attrs({
  ghost: true,
})`
  width: 100%;

  & .ant-collapse-item > .ant-collapse-header {
    padding: 0;
  }

  & .ant-collapse-content > .ant-collapse-content-box {
    padding: 0;
  }
`;

export const SForm = styled(Form)`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxLaptops}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}px) {
    grid-template-columns: 1fr;
  }
`;

export const SFormItem = styled(Form.Item).attrs({
  noStyle: true,
})`
  display: flex;
  flex-direction: column;
`;

export const SSelect = styled(Select)``;
