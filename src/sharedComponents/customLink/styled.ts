import styled from '@emotion/styled';
import { color } from '../../assets/variables';
import { Box } from '@mui/material';

export const LinkStyled = styled.p`
  margin: 0 6px 0 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: ${color.mainText};
`;

export const BoxStyled = styled(Box)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;
