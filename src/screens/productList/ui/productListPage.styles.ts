import styled from "styled-components";
import { Breadcrumb, Button, Drawer, Select, Typography } from "antd";

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
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 20px 0 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};

  @media (max-width: ${({ theme }) => theme.breakpoints.maxLaptops}px) {
    grid-template-columns: 1fr;
  }
`;

export const SRightBar = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.maxLaptops}px) {
    display: none;
  }
`;

export const SBreadcrumb = styled(Breadcrumb).attrs({
  separator: ">",
})`
  @media (max-width: ${({ theme }) => theme.breakpoints.maxLaptops}px) {
    display: none;
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
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxLaptops}px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}px) {
    grid-template-columns: 1fr 1fr;
    justify-items: left;
  }
`;

export const SSelect = styled(Select).attrs({
  bordered: false,
})`
  width: max-content;

  &.ant-select .ant-select-selection-item {
    font-weight: 500;
  }

  &.ant-select-single .ant-select-selector {
    padding-left: 0;
  }
`;

export const SButtonFilters = styled(Button).attrs({
  type: "text",
})`
  font-weight: 500;

  @media (min-width: ${({ theme }) => theme.breakpoints.maxLaptops}px) {
    display: none;
  }
`;

export const SCount = styled(Typography.Text)`
  font-weight: 500;
`;

export const SDrawer = styled(Drawer).attrs({
  width: "100%",
})`
  .ant-drawer-content-wrapper:has(&) {
    max-width: 300px;
  }

  .ant-drawer-body {
    padding: 0;
  }
`;
