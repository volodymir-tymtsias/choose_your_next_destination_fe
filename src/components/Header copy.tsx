import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import { Navbar } from './Navbar';

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
      <div className="header__logo">
        <Link to="/">
          <img
            src="./Logo.svg"
            alt="Logo"
            className="logo"
          />
        </Link>
        <Link to="/" className="header__text-logo">AddPlace</Link>
      </div>
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
      {/* <div className="header__right">
        {needSearch && (
          <div className="header__search">
            <Search placeholderName={paths[paths.length - 1]} />
          </div>
        )}
        <CustomNavLink
          to="favorites"
          classes="header__link"
          activeClass="header__link--active"
        >
          <span className="icon icon--favorites">
            {!!favorites.length && (
              <span className="icon__counter">
                {favorites.length}
              </span>
            )}
          </span>
        </CustomNavLink>
        <CustomNavLink
          to="cart"
          classes="header__link"
          activeClass="header__link--active"
        >
          <span className="icon icon--cart">
            {!!cartTotalQuantity && (
              <span className="icon__counter">
                {cartTotalQuantity}
              </span>
            )}
          </span>
        </CustomNavLink>
      </div> */}
    </header>
  );
};
