import styled from "styled-components";
import { Breadcrumb, Image } from "antd";

export const SProductPage = styled.div`
  width: 100%;
`;

export const SBreadcrumb = styled(Breadcrumb).attrs({
  separator: ">",
})`
  font-size: 12px;
  @media (max-width: ${({ theme }) => theme.breakpoints.maxLaptops}px) {
    display: none;
  }
`;

export const SContent = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 20px 0;
`;

export const SPreview = styled(Image).attrs({
  preview: {
    mask: null,
    visible: false,
  },
})`
  cursor: zoom-in;
`;

export const SImages = styled.div`
  display: none;
`;
