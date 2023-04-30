import styled from "styled-components";

export const SWrapper = styled.header`
  display: flex;
  justify-content: center;
  background-color: #041529;
`;

export const SHeader = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.maxDesktops}px;
  width: 100%;
`;
