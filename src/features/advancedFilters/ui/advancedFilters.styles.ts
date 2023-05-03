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
  grid-gap: 0 30px;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`;

export const SFormItem = styled(Form.Item)`
  display: flex;
  flex-direction: column;
`;

export const SSelect = styled(Select)``;
