import styled from "styled-components";
import { Typography } from "antd";

export const SHome = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr auto;
  height: 100%;
  justify-items: center;
  gap: 20px;
`;

export const STitle = styled(Typography.Title)`
  display: flex;
  align-self: center;
  padding: 10px;
  border-radius: 5px;
  background-color: #1677ff;

  &.ant-typography {
    font-size: 30px;
    color: white;
  }
`;
