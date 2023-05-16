import styled from "styled-components";
import { Menu } from "antd";

export const SMenu = styled.menu`
  display: flex;
  background-color: inherit;
  max-width: 250px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}px) {
    display: none;
  }
`;

export const SList = styled(Menu).attrs({
  mode: "inline",
  theme: "light",
})``;
