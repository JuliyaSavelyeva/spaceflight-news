import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import articlesReducer from '../features/articles/articleSlice';

export const store = configureStore({
  reducer: {
    articles: articlesReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>;
