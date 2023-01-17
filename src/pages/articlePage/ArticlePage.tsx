import imgTest from '../../assets/img/testImg.png';
import { CustomLink } from '../../sharedComponents/customLink/CustomLink';
import { WrapperBox, MediaStyled, CardStyled, CardContentStyled, DescriptionStyled, LinkWrapperStyled } from './styled';
import { CustomTitle } from '../../sharedComponents/customTitle/CustomTitle';
import { description } from '../../assets/data';


export const ArticlePage = () => {
  return (
    <WrapperBox>
      <MediaStyled image={imgTest} />
      <CardStyled>
        <CardContentStyled>
          <CustomTitle textAlign={{ textAlign: 'center' }}>The 2020 World's Most Valuable Brands</CustomTitle>
          <DescriptionStyled>
            {description}
          </DescriptionStyled>
        </CardContentStyled>
      </CardStyled>
      <LinkWrapperStyled>
        <CustomLink isBack url={'/'}>Back to homepage</CustomLink>
      </LinkWrapperStyled>
    </WrapperBox>
  );
};
