import { ChangeEvent, useState } from 'react';
import { ArticleTypes } from '../models/articles';
import { reduceDescription, reduceTitle } from '../utils/calculate';

export const useSearch = (articlesData: ArticleTypes[] | null) => {
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
          newDescription = newDescription.replace(
            re,
            (match) => `<mark>${match}</mark>`
          );
        });

        return {
          ...article,
          title: newTitle,
          summary: newDescription
        };
      });

      setUpdateArticleData(highlightedArticles);
    }
  };

  return [
    handleChange,
    setUpdateArticleData,
    updateArticleData,
    value
  ] as const;
};
