import styled from "styled-components";
import { Collapse } from "antd";

export const SFilter = styled.aside``;

export const SCollapse = styled(Collapse).attrs({
  ghost: true,
})`
  width: 100%;
`;

export const SPanel = styled(Collapse.Panel)`
  .ant-collapse-header-text {
    user-select: none;
  }
`;
