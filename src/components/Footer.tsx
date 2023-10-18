import React from 'react';
import { Logo } from './Logo';
import { Link, useNavigate } from 'react-router-dom';
import * as tagsAction from '../features/tags';
import classNames from 'classnames';
import { Tags } from '../types/Tags';
import { useAppDispatch } from '../app/hooks';

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

  const topCategories = [Tags.Cities, Tags.Architecture, Tags.Seaside];
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onTopCategories = (tag: Tags) => () => {
    dispatch(tagsAction.addTags(Tags.All));
    dispatch(tagsAction.addTags(tag));
    navigate('/');
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <Logo />
        <div className="footer__menu-container">
          {getNav(['Top Rated', 'Trip Planner'], 'Top features')}
          <nav className="footer__links">
            <h5 className="footer__links-title">Top Categories</h5>
            <ul className='footer__list'>
              {
                topCategories.map(tag => (
                  <li className="footer__list-item" key={tag}>
                     <button
                      className="button button--footer"
                      type="button"
                      onClick={onTopCategories(tag)}
                    >
                      {tag}
                    </button>
                  </li> 
                ))
              }
            </ul>
          </nav>
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
