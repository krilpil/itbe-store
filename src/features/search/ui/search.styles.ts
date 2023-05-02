import styled from "styled-components";

export const SSearch = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.breakpoints.maxTablets}px;
  width: 100%;
  gap: 10px;
`;

export const STags = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  overflow: hidden;
  overflow-x: auto;
  transition: 0.5s;

  &::-webkit-scrollbar {
    display: none;
  }

  & .ant-tag {
    margin-inline-end: 0;
  }
`;
