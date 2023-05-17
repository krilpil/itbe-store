import styled from "styled-components";
import { Collapse } from "antd";

export const SFilter = styled.aside`
  border-left: 1px solid ${({ theme }) => theme.colors.middleGray};
`;

export const SCollapse = styled(Collapse).attrs({
  ghost: true,
})`
  width: 100%;
`;

export const SPanel = styled(Collapse.Panel)``;
