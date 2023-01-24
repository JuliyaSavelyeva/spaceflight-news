import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { getArticle, getArticles } from './articleAPI';
import { ArticleTypes } from '../../models/articles';

export interface ArticlesState {
  articlesData: ArticleTypes[] | null;
  article: ArticleTypes | null;
  status: 'success' | 'loading' | 'failed';
}

const initialState: ArticlesState = {
  articlesData: null,
  article: null,
  status: 'success'
};

export const getAllArticles = createAsyncThunk(
  'articles/getArticles',
  async () => {
    const response = await getArticles();
    return response.data;
  }
);

export const getSingleArticle = createAsyncThunk(
  'articles/getArticle',
  async (id: string) => {
    const response = await getArticle(id);
    return response.data;
  }
);

export const articlesReducer = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllArticles.fulfilled, (state, action) => {
        state.status = 'success';
        state.articlesData = action.payload;
      })
      .addCase(getAllArticles.rejected, (state) => {
        state.status = 'failed';
      });
    builder
      .addCase(getSingleArticle.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getSingleArticle.fulfilled, (state, action) => {
        state.status = 'success';
        state.article = action.payload;
      })
      .addCase(getSingleArticle.rejected, (state) => {
        state.status = 'failed';
      });
  }
});

export const selectArticles = (state: RootState) => state.articles;
export default articlesReducer.reducer;
