import { Articles } from '../../components/articles/Articles';
import { SearchField } from '../../components/searchField/SearchField';
import { MainContainer } from './styled';
import { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  getAllArticles,
  selectArticles
} from '../../features/articles/counterSlice';
import { ArticleTypes } from '../../models/articles';
import { reduceDescription, reduceTitle } from '../../utils/calculate';

export const HomePage = () => {
  const { articlesData } = useAppSelector(selectArticles);
  const dispatch = useAppDispatch();
  const [updateArticleData, setUpdateArticleData] = useState<ArticleTypes[] | null>(null);
  const [value, setValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    const searchWords = e.target.value.split(' ');
    const filteredWords = searchWords.filter((word) => !!word);

    if (articlesData) {
      const searchedArticles = articlesData.filter((article) => {
        const title = reduceTitle(article.title);
        const description = reduceDescription(article.summary);
        const isSearchedArticles = filteredWords.filter(
          (word) =>
            title.toLowerCase().includes(word.toLowerCase()) ||
            description.toLowerCase().includes(word.toLowerCase())
        );

        return isSearchedArticles.length;
      });

      const highlightedArticles = searchedArticles.map((article) => {
        const title = reduceTitle(article.title);
        const description = reduceDescription(article.summary);
        let newTitle = title;
        let newDescription = description;
        filteredWords.forEach((word) => {
          const re = new RegExp(word, 'gi');
          newTitle = newTitle.replace(re, (match) => `<mark>${match}</mark>`);
          newDescription = newDescription.replace(re, (match) => `<mark>${match}</mark>`);
        });
        console.log(newTitle);

        return {
          ...article,
          title: newTitle,
          summary: newDescription
        };
      });

      setUpdateArticleData(highlightedArticles);
    }
  };

  useEffect(() => {
    if (!value) {
      setUpdateArticleData(articlesData);
    }
  }, [articlesData, value]);

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
