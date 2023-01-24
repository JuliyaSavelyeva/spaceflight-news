import { Articles } from '../../components/articles/Articles';
import { SearchField } from '../../components/searchField/SearchField';
import { MainContainer } from './styled';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  getAllArticles,
  selectArticles
} from '../../features/articles/articleSlice';
import { useSearch } from '../../hooks/useSearchHook';

export const HomePage = () => {
  const { articlesData } = useAppSelector(selectArticles);
  const dispatch = useAppDispatch();
  const [handleChange, setUpdateArticleData, updateArticleData, value] = useSearch(articlesData);

  useEffect(() => {
    if (!value) {
      setUpdateArticleData(articlesData);
    }
  }, [articlesData, value, setUpdateArticleData]);

  useEffect(() => {
    dispatch(getAllArticles());
  }, [dispatch]);

  return (
    <MainContainer>
      <SearchField value={value} onChange={handleChange} />
      <Articles articlesData={updateArticleData} />
    </MainContainer>
  );
};
