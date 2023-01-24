import { Box, Grid } from '@mui/material';
import { CustomInfo } from '../../sharedComponents/customInfo/CustomInfo';
import { DividerStyled } from './styled';
import { CustomCard } from '../../sharedComponents/customCard/CustomCard';
import { ArticleTypes } from '../../models/articles';
import { CustomLoader } from '../../sharedComponents/customLoader/CustomLoader';
import { useAppSelector } from '../../app/hooks';
import { selectArticles } from '../../features/articles/articleSlice';
import { CustomError } from '../../sharedComponents/customError/CustomError';

type ArticlesTypes = {
  articlesData: ArticleTypes[] | null;
};

export const Articles = ({ articlesData }: ArticlesTypes) => {
  const { status } = useAppSelector(selectArticles);
  return (
    <Box style={{ margin: '0 auto' }}>
      {status === 'loading' && <CustomLoader />}
      {status === 'failed' && <CustomError />}
      {articlesData && status === 'success' && (
        <>
          <CustomInfo>{`Results: ${articlesData.length}`}</CustomInfo>
          <DividerStyled />
          <Grid
            container
            rowSpacing={'40px'}
            columnSpacing={{ xs: '30px', lg: '45px' }}
          >
            {articlesData.map((article) => (
              <Grid
                item
                key={article.id}
                xs={12}
                sm={6}
                md={4}
                justifyContent={'center'}
              >
                <CustomCard article={article} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
};
