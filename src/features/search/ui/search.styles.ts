import styled from "styled-components";
import { Segmented } from "antd";

export const SSearch = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const SSegmented = styled(Segmented)`
  display: flex;
  align-self: center;
  width: max-content;
`;
