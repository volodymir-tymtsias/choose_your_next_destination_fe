import React from 'react';
import { Link } from 'react-router-dom';

export const Logo: React.FC = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img
          src="./Logo.svg"
          alt="Logo"
          className="logo__image"
        />
      </Link>
      <Link to="/" className="logo__text">AddPlace</Link>
    </div>
  );
}