import styled from '@emotion/styled';
import { Box, Card, CardContent, CardMedia } from '@mui/material';
import { color } from '../../assets/variables';
import { bp } from '../../assets/mediaQueries';

export const WrapperBox = styled(Box)`
  position: relative;
  margin-bottom: 45px;
`;

export const CardStyled = styled(Card)`
  margin: -95px auto 35px auto;
  box-sizing: border-box;
  width: 89.6%;
  min-height: 500px;

  &.MuiCard-root {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
    border: 1px solid ${color.line};
    border-radius: 5px;
  }
`;

export const MediaStyled = styled(CardMedia)`
  height: 245px;
  min-width: 100%;
  max-width: 100%;
`;

export const CardContentStyled = styled(CardContent)`
  padding: 20px;

  @media (min-width: ${bp.md}) {
    padding: 35px 75px 50px 75px;
  }
`;

export const DescriptionStyled = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #000
`;

export const LinkWrapperStyled = styled(Box)`
  margin: 0 auto;
  width: 89.6%;
`;

export const LoaderWrapperStyled = styled(Box)`
  height: 100vh;
`;
