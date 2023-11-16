import React from 'react';
import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Header />

      <div className="app__main-container">
        <main className="app__main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="home" element={<Navigate to="/" replace />} />

            {/* <Route path="topRated" element={<TopRatedPage />} /> */}
            {/* <Route path=":placeId" element={<PlaceDetailsPage />} /> */}

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </div>
  );
};
