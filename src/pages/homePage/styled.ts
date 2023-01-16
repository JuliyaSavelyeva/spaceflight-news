import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { bp } from '../../assets/mediaQueries';

export const MainContainer = styled(Grid)`
  padding: 20px;

  @media (min-width: ${bp.sm}) {
    padding: 30px;
  }

  @media (min-width: ${bp.md}) {
    padding: 50px 75px 63px 75px;
  }
`;
