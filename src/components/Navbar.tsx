import React from 'react';
import { CustomNavLink } from './CustomNavLink';
import { Selector } from './Selector';
import { Language } from '../types/Language';

export const Navbar: React.FC = () => {
  const menuItems = ['Home','Top Rated'];
  const language: Language[] = [Language.EN, Language.UKR, Language.GER, Language.POL, Language.FRE];

  const getMenuItems = (item: string) => {
    const urlLink = [item.split(' ')[0].toLowerCase(), ...item.split(' ').slice(1)].join('');

    return (
      <li className="navbar__item" key={urlLink}>
        <CustomNavLink
          to={urlLink === 'home' ? '/' : urlLink}
          classes="button button--menu"
          activeClass="button--menu-active"
        >
          <span className={`icon icon--${urlLink}`}></span>
          {item}
        </CustomNavLink>
      </li> 
    );
  };

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {
          menuItems.map(getMenuItems)
        }
        <li>
          <Selector items={language} name='langSelector' typeButton='button--menu'/>
        </li>
      </ul>
    </nav>
  );
};
