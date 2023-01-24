import axios from 'axios';

const SPACEFLIGHTSAPI = 'https://api.spaceflightnewsapi.net/v3/articles';

export const getArticles = () => {
  return axios.get(SPACEFLIGHTSAPI);
};

export const getArticle = (id: string) => {
  return axios.get(`${SPACEFLIGHTSAPI}/${id}`);
};
