import styled from '@emotion/styled';
import { color } from '../../assets/variables';

export const Title = styled.h2`
  margin: 0;
  height: 58px;
  overflow: hidden;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: ${color.mainText};
  text-align: ${props => (props.style ? 'center' : 'start')};
`;
