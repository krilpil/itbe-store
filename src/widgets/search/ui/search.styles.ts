import styled from "styled-components";
import { Typography } from "antd";

export const SSearch = styled.div`
  justify-self: center;
  max-width: ${({ theme }) => theme.breakpoints.maxTablets}px;
  width: 100%;
`;

export const STitle = styled(Typography.Title)`
  &.ant-typography {
    font-size: 30px;
    text-align: center;
  }
`;
