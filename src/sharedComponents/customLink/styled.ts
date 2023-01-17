import styled from '@emotion/styled';
import { color } from '../../assets/variables';
import { Box } from '@mui/material';
import { bp } from '../../assets/mediaQueries';

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
  max-width: 184px;
  margin-left: ${props => (props.flexDirection === 'row-reverse' ? '20px' : 0)};

  @media (min-width: ${bp.md}) {
    margin-left: ${props => (props.flexDirection === 'row-reverse' ? '75px' : 0)};
  }

  & svg {
    margin-top: 4px;
    margin-right: ${props => (props.flexDirection === 'row-reverse' ? '6px' : 0)};
  }
`;

