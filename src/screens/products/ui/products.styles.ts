import styled from "styled-components";
import { Select, Typography } from "antd";

export const SProducts = styled.div`
  display: grid;
  grid-template-columns: 1fr 250px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxLaptops}px) {
    grid-template-columns: 1fr;
  }
`;

export const SContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SNavigation = styled.div`
  display: grid;
  height: 80px;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};

  @media (max-width: ${({ theme }) => theme.breakpoints.maxLaptops}px) {
    grid-template-columns: 1fr;
  }
`;

export const STitle = styled(Typography.Title)`
  &.ant-typography {
    margin-bottom: 0;
    text-align: center;
    height: max-content;
  }
`;

export const SToolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SSelect = styled(Select).attrs({
  bordered: false,
})`
  width: max-content;

  &.ant-select-single .ant-select-selector {
    padding-left: 0;
  }
`;
