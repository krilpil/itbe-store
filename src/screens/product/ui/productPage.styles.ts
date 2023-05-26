import styled from "styled-components";
import { Breadcrumb } from "antd";

export const SBreadcrumb = styled(Breadcrumb).attrs({
  separator: ">",
})`
  @media (max-width: ${({ theme }) => theme.breakpoints.maxLaptops}px) {
    display: none;
  }
`;
