import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './index.scss';
import { Provider } from 'react-redux';
import { HomePage } from './pages/homePage/HomePage';
import { ArticlePage } from './pages/articlePage/ArticlePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    // <Provider store={store}>
    //   <Suspense>
    //     <BrowserRouter>
    //       <Routes>
    //         <Route path='/' element={<HomePage />} />
    //         <Route path='/launches' element={<LaunchesPage />} />
    //       </Routes>
    //     </BrowserRouter>
    //   </Suspense>
    // </Provider>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/article/:id' element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
