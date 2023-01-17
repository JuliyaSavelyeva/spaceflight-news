import styled from '@emotion/styled';
import { color } from '../../assets/variables';
import { Box, Card, CardContent, CardMedia } from '@mui/material';

export const CardStyled = styled(Card)`
  max-width: 400px;
  margin: 0 auto;
  height: 530px;

  &.MuiCard-root {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
    border: 1px solid ${color.line};
    border-radius: 5px;
  }
`;

export const CardMediaStyled = styled(CardMedia)`
  height: 217px;
  min-width: 100%;
  max-width: 100%;
`;

export const DateInfoWrapperStyled = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const DateInfoStyled = styled.p`
  margin: 0 0 0 8px;
  color: ${color.mainText};
  font-size: 14px;
  opacity: 0.6;
`;

export const CardContentStyled = styled(CardContent)`
  padding: 25px;
`;

export const CardActionStyled = styled(CardContent)`
  padding: 0 25px 25px 25px;
`;

export const DescriptionStyled = styled.p`
  margin: 20px 0 0 0;
  font-size: 16px;
  color: ${color.mainText};
  line-height: 150%;
  height: 96px;
  overflow: hidden;
`;
