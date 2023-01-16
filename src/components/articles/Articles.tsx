import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { CustomInfo } from '../../sharedComponents/customInfo/CustomInfo';
import { DividerStyled } from './styled';
import { CustomCard } from '../../sharedComponents/customCard/CustomCard';

const arr = [1, 2, 3, 4, 5];


export const Articles = () => {
  return (
    <Box style={{ margin: '0 auto' }}>
      <CustomInfo>Results: 6</CustomInfo>
      <DividerStyled />
      <Grid container rowSpacing={'40px'} columnSpacing={'45px'}>
        {arr.map((item) => (
          <Grid item key={item} xs={12} sm={6} md={4} justifyContent={'center'}>
            <CustomCard />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
