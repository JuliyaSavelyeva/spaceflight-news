import { BoxStyled, LinkStyled } from './styled';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import { ReactComponent as ArrowRightIcon } from '../../assets/img/arrowRightIcon.svg';
import { useMemo, forwardRef } from 'react';

type CustomLinkTypes = {
  id: number
}

export const CustomLink = ({ id }: CustomLinkTypes) => {
  const CustomLink = useMemo(
    () =>
      forwardRef<HTMLAnchorElement, Omit<LinkProps, 'to'>>((
        linkProps,
        ref
      ) => <RouterLink ref={ref} to={`/article/${id}`} {...linkProps} />),
    [id]
  );

  return (
    <BoxStyled component={CustomLink}>
      <LinkStyled>Read more</LinkStyled>
      <ArrowRightIcon />
    </BoxStyled>
  );
};
