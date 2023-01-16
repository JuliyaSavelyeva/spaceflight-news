import { ReactNode } from 'react';
import { Info } from './styled';

type HeadingTypes = {
  children: ReactNode
}

export const CustomInfo = ({ children }: HeadingTypes) => {
  return (
    <Info>{children}</Info>
  );
};
