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
import { calculateLengthDescription } from '../../utils/calculate';

dayjs.extend(advancedFormat);

type CustomCardTypes = {
  article: ArticleTypes;
};

export const CustomCard = ({ article }: CustomCardTypes) => {
  const description: string = useMemo(() => {
    if (article) {
      const counterCharacters = calculateLengthDescription(article.summary);

      return article.summary.length <= 100
        ? article.summary
        : `${article.summary.slice(0, counterCharacters)}...`;
    }
    return '';
  }, [article]);

  return (
    <CardStyled>
      <CardMediaStyled image={article.imageUrl} title={article.title} />
      <CardContentStyled>
        <DateInfoWrapperStyled>
          <CalendarIcon />
          <DateInfoStyled>
            {dayjs(article.publishedAt).format('MMM Do, YYYY')}
          </DateInfoStyled>
        </DateInfoWrapperStyled>
        <CustomTitle title={article.title} />
        <DescriptionStyled dangerouslySetInnerHTML={{ __html: description }} />
      </CardContentStyled>
      <CardActionStyled>
        <CustomLink url={`/article/${article.id}`}>Read more</CustomLink>
      </CardActionStyled>
    </CardStyled>
  );
};
