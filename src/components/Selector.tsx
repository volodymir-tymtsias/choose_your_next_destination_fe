import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector, useClickOutside } from '../app/hooks';
import { Language } from '../types/Language';
import * as selectedLanguageAction from '../features/language';

type Props = {
  items: Language[],
  name: string,
  defaultValue?: string,
  typeButton: string,
};

export const Selector: React.FC<Props> = ({
  items,
  name,
  defaultValue,
  typeButton,
}) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const lenguage = useAppSelector(state => state.lenguage.language);
  const currentItems = items.filter(item => item !== lenguage);
  const dispatch = useAppDispatch();
  // const [searchParams] = useSearchParams();
  // const sortBy = searchParams.get(filterName) || defaultValue;

  const onClickHandler = () => setIsDropdown(!isDropdown);
  const menuRef = useRef(null);

  const onSelectHandler = (item: Language) => () => {
    dispatch(selectedLanguageAction.setLanguage(item));
    setIsDropdown(!isDropdown);
  };

  useClickOutside(menuRef, () => {
    if (isDropdown) {
      setIsDropdown(false);
    }
  });

  return (
    <div
      className={classNames(
        'selector',
        { 'selector--is-active': isDropdown },
      )}
      ref={menuRef}
    >
      <button
        type="button"
        className={classNames(
          'button',
          { [typeButton]: typeButton },
        )}
        onClick={onClickHandler}
      >
        <span className="icon icon--language"></span>
        <span>{lenguage}</span>
        <span className={`icon ${isDropdown ? 'icon--down' : 'icon--up'}`} />
      </button>

      <nav
        className={classNames(
          'selector__menu',
          { 'selector__menu--is-active': isDropdown },
        )}
        
      >
        <ul className="selector__menu-list">
          {currentItems.map(item => (
            <li 
              className="selector__link"
              onClick={onSelectHandler(item)}
              key={item}
            >
              {item}
            </li>
            // <SearchLink
            //   className={classNames(
            //     'selector__link',
            //     { 'selector__link--is-active': item.value === sortBy },
            //   )}
            //   key={item.value}
            //   params={getParams(item.value)}
            //   onClick={onClickHandler}
            // >
            //   {item.text}
            // </SearchLink>
          ))}
          </ul>
      </nav>
    </div>
  );
};
