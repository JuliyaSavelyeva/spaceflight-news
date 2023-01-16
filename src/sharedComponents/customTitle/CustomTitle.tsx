import { ReactNode } from 'react';
import { Title } from './styled';

type TitleTypes = {
  children: ReactNode
}

export const CustomTitle = ({ children }: TitleTypes) => {
  return (
    <Title>{children}</Title>
  );
};
