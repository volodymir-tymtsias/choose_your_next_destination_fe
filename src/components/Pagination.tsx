import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../helpers/searchHelper';
import { getNumbers } from '../helpers/getNumbers';
import classNames from 'classnames';

type Props = {
  quantity: number,
  perPage: number,
  quantityVisiblePages: number;
  page: string,
};

export const Pagination: React.FC<Props> = ({
  quantity,
  perPage,
  quantityVisiblePages,
  page,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const endPage = Math.ceil(quantity / perPage);
  const pages = getNumbers(1, endPage);
  const [firstVisiblePage, setFirstVisiblePage] = useState(1);
  const lastVisiblePage = firstVisiblePage + quantityVisiblePages - 1;
  const visiblePages = getNumbers(firstVisiblePage, lastVisiblePage);

  useEffect(() => {
    if (+page === 1) {
      setFirstVisiblePage(1);
    }
  }, [page]);

  const handlerPreviousButton = () => {
    if (page !== '1') {
      if (visiblePages[0] === +page) {
        setFirstVisiblePage(current => current - 1);
      }

      setSearchParams(
        getSearchWith(searchParams, { page: String(+page - 1) }),
      );
    }
  };

  const handlerPreviousVisiblePagesButton = () => {
    const currentFirstPage = (
      firstVisiblePage - quantityVisiblePages < 1
    ) 
      ? 1
      : firstVisiblePage - quantityVisiblePages;
  
    setFirstVisiblePage(currentFirstPage);
    setSearchParams(
      getSearchWith(searchParams, { page: String(currentFirstPage) }),
    );
  };

  const handlerOnClickPage = (currentPage: number) => () => {
    if (currentPage !== +page) {
      setSearchParams(
        getSearchWith(searchParams, { page: String(currentPage) }),
      );
    }
  };

  const handlerNextButton = () => {
    if (page !== String(endPage)) {
      if (visiblePages[visiblePages.length - 1] === +page) {
        setFirstVisiblePage(current => current + 1);
      }

      setSearchParams(
        getSearchWith(searchParams, { page: String(+page + 1) }),
      );
    }
  };

  const handlerNextVisiblePagesButton = () => {
    const currentFirstPage = (
      firstVisiblePage + quantityVisiblePages > endPage - quantityVisiblePages + 1
    ) 
      ? endPage - quantityVisiblePages + 1
      : firstVisiblePage + quantityVisiblePages;
  
    setFirstVisiblePage(currentFirstPage);
    setSearchParams(
      getSearchWith(searchParams, { page: String(currentFirstPage) }),
    );
  };

  return (
    <ul className="pagination" data-cy="pagination">
      <li className="pagination__item">
        <button
          type="button"
          className={classNames(
            'button',
            'button--pagination',
            { 'button--pagination-disabled': page === '1' },
          )}
          onClick={handlerPreviousButton}
        >
          <span className="icon icon--mask icon--left" />
        </button>
      </li>
      
      {firstVisiblePage > 1 && (
        <li className="pagination__item">
          <button
            type="button"
            className="button button--pagination"
            onClick={handlerPreviousVisiblePagesButton}
          >
            ...
          </button>
        </li>
      )}
      {visiblePages.map(pageNumber => (
        <li className="pagination__item" key={pageNumber}>
          <button
            type="button"
            className={classNames(
              'button',
              'button--pagination',
              { 'button--pagination-active': pageNumber === +page },
            )}
            onClick={handlerOnClickPage(pageNumber)}
          >
            {pageNumber}
          </button>
        </li>
      ))}
      {visiblePages[visiblePages.length - 1] < endPage && (
        <li className="pagination__item">
          <button
            type="button"
            className="button button--pagination"
            onClick={handlerNextVisiblePagesButton}
          >
            ...
          </button>
        </li>
      )}
      <li className="pagination__item">
        <button
          type="button"
          className={classNames(
            'button',
            'button--pagination',
            { 'button--pagination-disabled': page === String(endPage) },
          )}
          onClick={handlerNextButton}
        >
          <span className="icon icon--mask icon--right" />
        </button>
      </li>
    </ul>
  );
};
