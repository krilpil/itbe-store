import styled from "styled-components";

export const SWrapper = styled.main`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 46px);
`;

export const SMain = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.maxDesktops}px;
  width: 100%;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 20px 10px rgb(0, 0, 0, 0.05);
`;
