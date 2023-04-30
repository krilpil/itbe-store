import styled from "styled-components";
import { Menu } from "antd";

export const SMenu = styled(Menu).attrs({
  mode: "horizontal",
  theme: "dark",
})`
  display: flex;
  justify-content: center;
  background-color: inherit;
`;
