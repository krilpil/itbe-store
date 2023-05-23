import styled from "styled-components";
import { Card } from "antd";

export const SCard = styled(Card).attrs({
  hoverable: true,
})`
  display: grid;
  grid-template-rows: max-content 1fr;
  height: 100%;

  .ant-card-body {
    display: flex;
    flex-direction: column;
    padding: 14px;
  }
`;

export const SPrice = styled.p`
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const SProperties = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 100%;
`;
