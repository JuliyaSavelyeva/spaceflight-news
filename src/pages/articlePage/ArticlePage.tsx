import { CustomLink } from '../../sharedComponents/customLink/CustomLink';
import {
  WrapperBox,
  MediaStyled,
  CardStyled,
  CardContentStyled,
  DescriptionStyled,
  LinkWrapperStyled,
  LoaderWrapperStyled
} from './styled';
import { CustomTitle } from '../../sharedComponents/customTitle/CustomTitle';
import { description } from '../../assets/data';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  getSingleArticle,
  selectArticles
} from '../../features/articles/articleSlice';
import { useEffect } from 'react';
import { CustomLoader } from '../../sharedComponents/customLoader/CustomLoader';
import { CustomError } from '../../sharedComponents/customError/CustomError';

const link = (
  <LinkWrapperStyled>
    <CustomLink isBack url={'/'}>
      Back to homepage
    </CustomLink>
  </LinkWrapperStyled>
);

export const ArticlePage = () => {
  const { id } = useParams();
  const { status, article } = useAppSelector(selectArticles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getSingleArticle(id));
    }
  }, [dispatch, id]);

  return (
    <WrapperBox>
      {status === 'loading' && (
        <LoaderWrapperStyled>
          <CustomLoader />
        </LoaderWrapperStyled>
      )}
      {status === 'failed' && (
        <LoaderWrapperStyled>
          <CustomError />
          {link}
        </LoaderWrapperStyled>
      )}
      {article && status === 'success' && (
        <>
          <MediaStyled image={article.imageUrl} />
          <CardStyled>
            <CardContentStyled>
              <CustomTitle
                title={article.title}
                textAlign={{ textAlign: 'center' }}
              />
              <DescriptionStyled>{description}</DescriptionStyled>
            </CardContentStyled>
          </CardStyled>
          {link}
        </>
      )}
    </WrapperBox>
  );
};
