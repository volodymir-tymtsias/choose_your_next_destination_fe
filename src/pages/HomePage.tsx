import React, { useEffect, useMemo, useState } from 'react';
import { PlacesList } from '../components/PlacesList';
import { Place } from '../types/Place';
import { Search } from '../components/Search';
import { Tag } from '../components/Tag';
import { Tags } from '../types/Tags';
import { Pagination } from '../components/Pagination';
import { useSearchParams } from 'react-router-dom';
import { Modal } from '../components/Modal';
import { Filters } from '../components/Filters';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import * as placesAction from '../features/places';

import { Message } from '../components/Message';
import { Loader } from '../components/Loader';

export const HomePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const activities = searchParams.getAll('activities');
  const tags = searchParams.getAll('tags');
  const location = searchParams.get('location');
  const date = searchParams.get('date');
  const priceMin = searchParams.get('priceMin');
  const priceMax = searchParams.get('priceMax');
  const query = searchParams.get('query');
  const page = searchParams.get('page') || '1';

  const filtersIsOpen = useAppSelector(state => state.filtersIsOpen.filtersIsOpen);
  const { places, loading, hasError } = useAppSelector(state => state.places);
  
  const visiblePlaces = useMemo(() => {
    let currentPlaces = places;

    if (location) {
      currentPlaces = currentPlaces
        .filter(place => place.location.toLowerCase().includes(location.toLowerCase()));
    };
  
    // if (date) {
    //   currentPlaces = currentPlaces
    //     .filter(place => );
    // }
  
    if (priceMin) {
      currentPlaces = currentPlaces
        .filter(place => place.price >= +priceMin);
    };
  
    if (priceMax) {
      currentPlaces = currentPlaces
        .filter(place => place.price <= +priceMax);
    };
  
    if (activities.length) {
      currentPlaces = currentPlaces
        .filter(place => place.activities.some(item => activities.includes(item)));
    };
  
    if (tags.length && tags[0] !== Tags.All) {
      currentPlaces = currentPlaces
        .filter(place => place.tags.some(item => tags.includes(item)));
    };
  
    if (query) {
      currentPlaces = currentPlaces
        .filter(place => place.name.toLowerCase().includes(query.toLowerCase()));
    };

    return currentPlaces;
  }, [places, location, priceMin, priceMax, activities, tags, query]);
  
  
  
  const startIndex = page === '1' ? 0 : (+page - 1) * 20;
  const visiblePlacesOnPage = visiblePlaces.slice(startIndex, startIndex + 20);

  // useEffect(() => {
  //   dispatch(placesAction.initPlaces());
  // }, [dispatch]);
  
  return (
    <div className="home-page">
      <section className="home-page__filters">
        <div className="home-page__search-container">
          <Search />
          
        </div>
        {filtersIsOpen && (
          <Modal>
            <Filters />
          </Modal>
        )}
        <div className="home-page__tags">
          <Tag textLabel={Tags.All} />
          <Tag textLabel={Tags.Cities} />
          <Tag textLabel={Tags.Architecture} />
          <Tag textLabel={Tags.Seaside} />
          <Tag textLabel={Tags.Mountains} />
          <Tag textLabel={Tags.Extreme} />
        </div>
      </section>
      <section>
        {!loading && !!places.length && !hasError && (
          <>
            <div className="home-page__cards">
              <PlacesList places={visiblePlacesOnPage} />
            </div>

            {visiblePlaces.length > 20 && (
              <Pagination 
                quantity={150}
                perPage={20}
                quantityVisiblePages={3}
                page={page}
              />
            )}
          </>
        )}

        {!loading && !visiblePlaces.length && !hasError && (
          <Message message="No matching places found, please change your filter settings" isError />
        )}

        {!loading && hasError && (
          <Message message="Failed to load places" isError />
        )}

        {loading && !hasError && (
          <Loader />
        )}
      </section>
    </div>
  );
};
