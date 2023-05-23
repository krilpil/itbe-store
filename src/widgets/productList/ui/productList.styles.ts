import styled from "styled-components";

export const SProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: max-content;
  grid-gap: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoints.maxLaptops}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxTablets}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.maxMobile}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
