import React from 'react';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export const Footer: React.FC = () => {
  const getMenuItems = (item: string) => {
    const urlLink = [item.split(' ')[0].toLowerCase(), ...item.split(' ').slice(1)].join('');

    return (
      <li className="footer__list-item" key={urlLink}>
        <Link to={`/${urlLink}`} className="footer__link">
          {item}
        </Link>
      </li> 
    );
  };

  const getNav = (items: string[], title: string, addClass: string = '') => {
    return (
      <nav className="footer__links">
        {title && (<h5 className="footer__links-title">{title}</h5>)}
        <ul className={classNames(
          'footer__list',
          { [addClass]: addClass },
        )}>
          {
            items.map(getMenuItems)
          }
        </ul>
      </nav>
    );
  }

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <Logo />
        <div className="footer__menu-container">
          {getNav(['Top Rated', 'Trip Planner'], 'Top features')}
          {getNav(['Cities', 'Architecture', 'Seaside'], 'Top Categories')}
          {getNav(['Product Support', 'Blog', 'Partners'], 'Resources')}
          {getNav(['About Us', 'Contacts', 'Legality'], 'Company')}
          <div className="footer__links">
            <h5 className="footer__links-title">Contacts</h5>
            <div className="footer__list">
              <a href="tel:+3(800) 000-0000" className="footer__link">
                +3 800 000 000
              </a>
              <a href="mailto: addplace@gmail.com" className="footer__link">
                addplace@gmail.com
              </a>
            </div>
          </div>
        </div>
        </div>
        <div className="footer__bottom">
          {getNav(['Terms', 'Privacy', 'Cookies', 'Security'], '', 'footer__list--row')}
          <div className="footer__copyright">&#169; 2023 AddPlace Inc.</div>
        </div>
      </div>
    </footer>
  );
};
