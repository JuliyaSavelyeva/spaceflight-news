import { CircularProgress } from '@mui/material';
import { WrapperBoxStyled } from './styled';

export const CustomLoader = () => {
  return (
    <WrapperBoxStyled>
      <CircularProgress />
    </WrapperBoxStyled>
  );
};
