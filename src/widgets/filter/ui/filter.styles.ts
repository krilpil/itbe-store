import styled from "styled-components";
import { Collapse, Select, Slider } from "antd";

export const SFilter = styled.aside``;

export const SCollapse = styled(Collapse).attrs({
  ghost: true,
  accordion: true,
})`
  display: grid;
  width: 100%;
`;

export const SPanel = styled(Collapse.Panel)`
  .ant-collapse-header-text {
    user-select: none;
    text-transform: uppercase;
    font-weight: 500;
  }
`;

export const SSelect = styled(Select).attrs({
  mode: "multiple",
  allowClear: true,
  maxTagCount: "responsive",
})`
  width: 100%;
`;

export const SSlider = styled(Slider).attrs({
  range: true,
  step: 500,
  min: 0,
  max: 100_000,
})``;
