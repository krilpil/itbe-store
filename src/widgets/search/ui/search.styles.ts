import styled from "styled-components";
import { Form } from "antd";

export const SForm = styled(Form).attrs({
  layout: "vertical",
})`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
