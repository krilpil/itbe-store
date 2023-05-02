import styled from "styled-components";
import { Menu } from "antd";

export const SMenu = styled(Menu).attrs({
  mode: "vertical",
  theme: "light",
})`
  background-color: inherit;
  width: 200px;
`;
