import React from 'react';
import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
// import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Footer } from './components/Footer';
// import { CartProvider } from './helpers/cartHelper';
// import { FavoritesProvider } from './helpers/favoritesHelper';
// import { ProductsPage } from './pages/ProductsPage';
// import { getAccessories, getPhones, getTablets } from './helpers/getProducts';
// import { ProductDetailsPage } from './pages/ProductDetailsPage';
// import { CartPage } from './pages/CartPage';
// import { FavoritesPage } from './pages/FavoritesPage';

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

            {/* <Route path="phones">
              <Route
                index
                element={(
                  <ProductsPage
                    getProductsOfType={getPhones}
                    pageTitle="Mobile phones"
                  />
                )}
              />
              <Route path=":placeId" element={<PlaceDetailsPage />} />
            </Route> */}

            {/* <Route path="tablets">
              <Route
                index
                element={(
                  <ProductsPage
                    getProductsOfType={getTablets}
                    pageTitle="Tablets"
                  />
                )}
              />
              <Route path=":productId" element={<ProductDetailsPage />} />
            </Route> */}

            {/* <Route path="accessories">
              <Route
                index
                element={(
                  <ProductsPage
                    getProductsOfType={getAccessories}
                    pageTitle="Accessories"
                  />
                )}
              />
              <Route path=":productId" element={<ProductDetailsPage />} />
            </Route> */}

            {/* <Route path="/cart" element={<CartPage />} /> */}
            {/* <Route path="/favorites" element={<FavoritesPage />} /> */}

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </div>
  );
};
