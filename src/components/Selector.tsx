import React, { useState } from 'react';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { Language } from '../types/Language';
import * as selectedLanguageAction from '../features/language';

// type DropdownItem = {
//   text: string,
//   value: string,
// };

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
  const dispatch = useAppDispatch();
  // const [searchParams] = useSearchParams();
  // const sortBy = searchParams.get(filterName) || defaultValue;

  const onClickHandler = () => setIsDropdown(!isDropdown);

  const onSelectHandler = (item: Language) => () => {
    dispatch(selectedLanguageAction.setLanguage(item));
    setIsDropdown(!isDropdown);
  };

  // const getSortByText = () => items.find(item => item.value === sortBy)?.text;

  // const getParams = (value: string) => {
  //   const addParam = { [filterName]: value };

  //   addParam.page = '1';

  //   return addParam;
  // };

  return (
    <div
      className={classNames(
        'selector',
        { 'selector--is-active': isDropdown },
      )}
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

      <div
        className={classNames(
          'selector__menu',
          { 'selector__menu--is-active': isDropdown },
        )}
      >
        {items.map(item => (
          <div 
            className="selector__link"
            onClick={onSelectHandler(item)}
            key={item}
          >

            {item}
          </div>
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
      </div>
    </div>
  );
};
