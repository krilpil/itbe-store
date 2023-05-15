import styled from "styled-components";
import { Checkbox, Collapse, Form, Select, Slider } from "antd";

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

export const SForm = styled.div`
  display: grid;
  grid-gap: 18px;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;

  & .ant-form-item {
    display: initial;
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxLaptops}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}px) {
    grid-template-columns: 1fr;
  }
`;

export const SFormItem = styled(Form.Item).attrs({
  colon: true,
})``;

export const SSelect = styled(Select)``;

export const STagSelect = styled(Select).attrs({
  mode: "multiple",
  maxTagCount: "responsive",
})``;

export const SCheckbox = styled(Checkbox)`
  user-select: none;
`;

export const SSlider = styled(Slider).attrs({
  range: true,
  step: 500,
  min: 0,
  max: 100_000,
})``;
