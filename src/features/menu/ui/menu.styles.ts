import styled from "styled-components";
import { Menu } from "antd";

export const SList = styled(Menu).attrs({
  mode: "horizontal",
  theme: "light",
})`
  display: flex;
  justify-content: center;
  background: none;
  border-bottom: none;
  font-weight: 500;
`;
