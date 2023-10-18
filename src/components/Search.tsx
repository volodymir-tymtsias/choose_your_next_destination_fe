import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import * as filtersOpenAction from '../features/filtersOpen';

// type Props = {
//   placeholderName: string,
// };

export const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const filtersIsOpen = useAppSelector(state => state.filtersIsOpen.filtersIsOpen);
  const dispatch = useAppDispatch();

  const onQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const onSearchHandler = () => {
    dispatch(filtersOpenAction.setFiltersIsOpen());
  };

  return (
    <div className="search">
      <input
        type="text"
        className="input input--search"
        placeholder="I'm looking for ..."
        value={query}
        onChange={onQueryChange}
      />
      
      <button
        className="button button--filters"
        type="button"
        onClick={onSearchHandler}
      >
        <span className="icon icon--filters" />
        Filters
      </button>
    </div>
  );
};
