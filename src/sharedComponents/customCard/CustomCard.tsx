import imgTest from '../../assets/img/testImg.png';
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

// type HeadingTypes = {
//   children: ReactNode
// }

const description = ' Non sed molestie tortor massa vitae in mattis. Eget vel consequat hendrerit commodo libero aliquam. Urna arcu';
console.log(description.length);
const test = description.length <= 100 ? description : `${description.slice(0, 100)}...`;
console.log(test);
console.log(test.length);

export const CustomCard = () => {
  return (
    <CardStyled>
      <CardMediaStyled image={imgTest} title='green iguana' />
      <CardContentStyled>
        <DateInfoWrapperStyled>
          <CalendarIcon />
          <DateInfoStyled>June 29th, 2021</DateInfoStyled>
        </DateInfoWrapperStyled>
        <CustomTitle>The 2020 World's Most Valuable Brands</CustomTitle>
        <DescriptionStyled>
          {test}
        </DescriptionStyled>
      </CardContentStyled>
      <CardActionStyled>
        <CustomLink url={`/article/${1}`}>Read more</CustomLink>
      </CardActionStyled>
    </CardStyled>
  );
};
