import styled from "styled-components";
import { Button, Space, Typography } from "antd";

export const SGeneralInfo = styled.div`
  display: flex;
  align-items: center;
  justify-self: center;
  max-width: 400px;
  width: 100%;
  flex-direction: column;
  gap: 8px;
  height: max-content;
  text-align: center;
  text-transform: uppercase;
`;

export const STitle = styled(Typography.Title)`
  &.ant-typography {
    font-size: 22px;
    margin-bottom: 0;
  }
`;

export const SColor = styled(Typography.Text)`
  font-size: 14px;
  font-weight: 500;
`;

export const SPrice = styled(Typography.Text)`
  font-size: 18px;
  font-weight: 500;
`;

export const SSizeGroup = styled(Space.Compact)`
  width: 100%;
`;

export const SSize = styled(Button)`
  width: 100%;
  height: 44px;
`;

export const SButton = styled(Button)`
  width: 100%;
  height: 44px;
`;
