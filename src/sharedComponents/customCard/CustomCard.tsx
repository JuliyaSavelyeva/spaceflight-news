import {
  CardActionStyled,
  CardContentStyled,
  CardMediaStyled,
  CardStyled,
  DateInfoStyled,
  DateInfoWrapperStyled,
  DescriptionStyled
} from './styled';
import { ReactComponent as CalendarIcon } from '../../assets/img/calendarIcon.svg';
import { CustomTitle } from '../customTitle/CustomTitle';
import { CustomLink } from '../customLink/CustomLink';
import { ArticleTypes } from '../../models/articles';
import { useMemo } from 'react';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(advancedFormat);

type CustomCardTypes = {
  article: ArticleTypes;
}


export const CustomCard = ({ article }: CustomCardTypes) => {
  const description: string = useMemo(() => {
    if (article) {
      return article.summary.length <= 100 ? article.summary : `${article.summary.slice(0, 100)}...`;
    }
    return '';
  }, [article]);

  return (
    <CardStyled>
      <CardMediaStyled image={article.imageUrl} title={article.title} />
      <CardContentStyled>
        <DateInfoWrapperStyled>
          <CalendarIcon />
          <DateInfoStyled>{dayjs(article.publishedAt).format('MMM Do, YYYY')}</DateInfoStyled>
        </DateInfoWrapperStyled>
        <CustomTitle>{article.title}</CustomTitle>
        <DescriptionStyled>
          {description}
        </DescriptionStyled>
      </CardContentStyled>
      <CardActionStyled>
        <CustomLink url={`/article/${article.id}`}>Read more</CustomLink>
      </CardActionStyled>
    </CardStyled>
  );
};
