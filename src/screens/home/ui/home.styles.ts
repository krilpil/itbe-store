import styled from "styled-components";
import { Typography } from "antd";

export const SHome = styled.div`
  display: grid;
  justify-items: center;
  gap: 20px;
`;

export const STitle = styled(Typography.Title)`
  &.ant-typography {
    font-size: 30px;
    text-align: center;
  }
`;
