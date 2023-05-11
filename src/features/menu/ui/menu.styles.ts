import styled from "styled-components";
import { Menu } from "antd";

export const SMenu = styled.menu`
  display: flex;
  background-color: inherit;
  width: 250px;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}px) {
    display: none;
  }
`;

export const SList = styled(Menu).attrs({
  mode: "inline",
  theme: "light",
})``;
