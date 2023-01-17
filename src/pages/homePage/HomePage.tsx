import { Articles } from '../../components/articles/Articles';
import { SearchField } from '../../components/searchField/SearchField';
import { MainContainer } from './styled';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  getAllArticles,
  selectArticles
} from '../../features/articles/counterSlice';

export const HomePage = () => {
  const { articlesData } = useAppSelector(selectArticles);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllArticles());
  }, [dispatch]);

  return (
    <MainContainer>
      <SearchField />
      <Articles articlesData={articlesData} />
    </MainContainer>
  );
};
