import React from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
// import * as filtersAction from '../features/filters';
import classNames from 'classnames';
import { Tags } from '../types/Tags';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../helpers/searchHelper';


type Props = {
  textLabel: Tags,
};

// the number of tags on Homepage
const numberOfTags = 5;

export const Tag: React.FC<Props> = ({ textLabel }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tags = searchParams.getAll('tags');
  // const tags = useAppSelector(state => state.filters.tags);
  // const dispatch = useAppDispatch();
  const id = textLabel.toLowerCase();
  const checked = tags.includes(textLabel) || (tags.length === 0 && textLabel === Tags.All);

  const onCheckedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (checked) {
      // dispatch(filtersAction.deleteTag(textLabel));

      const newTags = tags.filter(tag => tag !== textLabel);

      setSearchParams(
        getSearchWith(searchParams, { tags: newTags.length ? newTags : [Tags.All], page: '1' }),
      );
    } else {
      // dispatch(filtersAction.addTag(textLabel));

      const newTags = (textLabel === Tags.All) 
        ? [Tags.All] 
        : [...tags.filter(tag => tag !== Tags.All), textLabel];

      setSearchParams(
        getSearchWith(searchParams, { tags: newTags.length === numberOfTags ? [Tags.All] : newTags, page: '1' }),
      );
    }
  };

  return (
    <div className="checkbox">
      <input
        type="checkbox"
        className="checkbox__invisible"
        checked={checked}
        onChange={onCheckedHandler}
        id={id}
      />
      <label 
        htmlFor={id}
        className={classNames(
          'checkbox__label',
          'button button--tags',
          { 'button--tags-active': checked},
        )}
      >
        {id !== 'all' && (<span className={`icon icon--${id}`}></span>)}
        {textLabel}
      </label>
    </div>
  );
};
