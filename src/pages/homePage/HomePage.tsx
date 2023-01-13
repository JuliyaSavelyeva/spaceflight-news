import { Grid } from '@mui/material';
import { Articles } from '../../components/articles/Articles';
import { SearchField } from '../../components/searchField/SearchField';
import { MainContainer } from './styled';

export const HomePage = () => {
  return (
    <MainContainer container>
      <Grid item><SearchField /></Grid>
      <Grid item><Articles /></Grid>
    </MainContainer>
  );
};
