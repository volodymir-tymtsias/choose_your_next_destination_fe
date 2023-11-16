import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import * as filtersOpenAction from '../features/filtersOpen';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../helpers/searchHelper';

export const Search: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const querySearch = searchParams.get('query');
  const [query, setQuery] = useState(querySearch || '');
  // const filtersIsOpen = useAppSelector(state => state.filtersIsOpen.filtersIsOpen);
  const dispatch = useAppDispatch();

  const onQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const onFiltersHandler = () => {
    dispatch(filtersOpenAction.setFiltersIsOpen());
  };

  const onSearchHandler = () => {
    setSearchParams(
      getSearchWith(searchParams, { query: query || null }),
    );
  };

  return (
    <div className="search">
      <div className="search__container">
        <input
          name="search"
          type="search"
          className="input input--search input--has-icon-left"
          placeholder="I'm looking for ..."
          value={query}
          onChange={onQueryChange}
        />
        <span className="search__icon-left">
          <i className="icon icon--mask icon--search"></i>
        </span>
        
        <button
          className="button button--filters"
          type="button"
          onClick={onFiltersHandler}
        >
          <span className="icon icon--filters" />
          Filters
        </button>
      </div>

      <button
        className="button button--yellow"
        type="button"
        onClick={onSearchHandler}
      >
        Search
      </button>
    </div>
  );
};
