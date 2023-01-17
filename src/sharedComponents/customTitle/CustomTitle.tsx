import { CSSProperties, ReactNode } from 'react';
import { Title } from './styled';

type TitleTypes = {
  children: ReactNode
  textAlign?: CSSProperties;
}

export const CustomTitle = ({ children, textAlign }: TitleTypes) => {
  return (
    <Title style={textAlign}>{children}</Title>
  );
};
