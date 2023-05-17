import styled, { css } from "styled-components";

const CssLayout = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

export const SLogo = styled.header`
  ${CssLayout}
`;

export const SFooter = styled.footer`
  color: #cccccc;
  ${CssLayout}
`;

export const SWrapper = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr auto;
  grid-template-columns: 1fr;
  min-height: 100vh;
  padding: 0 20px;
`;

export const SContent = styled.div`
  display: flex;
  justify-self: center;
  gap: 20px;
  max-width: ${({ theme }) => theme.breakpoints.maxDesktops}px;
  width: 100%;
  padding: 40px 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 20px 10px rgb(0, 0, 0, 0.05);
`;

export const SMain = styled.main`
  padding: 0 20px;
  width: 100%;
`;
