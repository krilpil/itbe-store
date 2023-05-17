import styled from "styled-components";
import { Card } from "antd";

export const SCard = styled(Card).attrs({
  hoverable: true,
})`
  height: max-content;

  .ant-card-body {
    display: grid;
    padding: 14px;
  }
`;

export const SPrice = styled.p`
  color: ${({ theme }) => theme.colors.secondaryText};
`;
