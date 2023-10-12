import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import { Navbar } from './Navbar';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  // const { getTotalQuantity } = useContext(CartContext);
  // const { favorites } = useContext(FavoritesContext);
  // const location = useLocation();
  // const paths = location.pathname.split('/');
  // const cartTotalQuantity = getTotalQuantity();

  // const needSearch = paths[paths.length - 1] === 'phones'
  //  || paths[paths.length - 1] === 'tablets'
  //  || paths[paths.length - 1] === 'accessories'
  //  || paths[paths.length - 1] === 'favorites';

  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <div className="header__nav">
          <Navbar />
        </div>
        <div className="header__buttons">
          <Link to="/signUp" className="button button--primary">
            Get Started
          </Link>
          <Link to="/signIn" className="button button--secondary">
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
};
