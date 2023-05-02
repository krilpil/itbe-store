import styled from "styled-components";
import { Collapse } from "antd";

export const SAdvancedFilters = styled(Collapse).attrs({
  ghost: true,
})`
  max-width: ${({ theme }) => theme.breakpoints.maxTablets}px;
  width: 100%;

  & .ant-collapse-item > .ant-collapse-header {
    padding: 0;
  }

  & .ant-collapse-content > .ant-collapse-content-box {
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;
