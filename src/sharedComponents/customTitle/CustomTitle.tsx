import { CSSProperties } from 'react';
import { Title } from './styled';

type TitleTypes = {
  textAlign?: CSSProperties;
  title: string;
};

export const CustomTitle = ({ textAlign, title }: TitleTypes) => {
  return (
    <Title dangerouslySetInnerHTML={{ __html: title }} style={textAlign} />
  );
};
