import React from 'react';
import './index.scss';

import { HomePage } from './pages/homePage/HomePage';
import { ArticlePage } from './pages/articlePage/ArticlePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ScrollToTop } from './components/scrollToTop/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/article/:id' element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
