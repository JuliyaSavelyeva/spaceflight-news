import { BoxStyled, LinkStyled } from './styled';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import { ReactComponent as ArrowRightIcon } from '../../assets/img/arrowRightIcon.svg';
import { ReactComponent as ArrowLeftIcon } from '../../assets/img/arrowLeftIcon.svg';
import { useMemo, forwardRef, ReactNode } from 'react';

type CustomLinkTypes = {
  url: string;
  children: ReactNode;
  isBack?: boolean;
}

export const CustomLink = ({ url, children, isBack }: CustomLinkTypes) => {
  const CustomLink = useMemo(
    () =>
      forwardRef<HTMLAnchorElement, Omit<LinkProps, 'to'>>((
        linkProps,
        ref
      ) => <RouterLink ref={ref} to={url} {...linkProps} />),
    [url]
  );

  return (
    <BoxStyled flexDirection={isBack ? 'row-reverse' : 'row'} component={CustomLink}>
      <LinkStyled>{children}</LinkStyled>
      {isBack ? <ArrowLeftIcon /> : <ArrowRightIcon />}
    </BoxStyled>
  );
};
