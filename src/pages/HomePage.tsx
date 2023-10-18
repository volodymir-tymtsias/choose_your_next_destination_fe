import React from 'react';
import { PlacesList } from '../components/PlacesList';
import { Place } from '../types/Place';
import { Search } from '../components/Search';
import { Checkbox } from '../components/Checkbox';
import { Tags } from '../types/Tags';
import { Pagination } from '../components/Pagination';
import { useSearchParams } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';

  const places: Place[] = [
    {
      id: 1,
      name: 'Louvre MuseumTest Test Test',
      location: 'Paris, France Test Test Test',
      raiting: 4.7,
      price: 65,
    },
    {
      id: 2,
      name: 'Louvre Museum',
      location: 'Paris, France',
      raiting: 4.7,
      price: 65,
    },
    {
      id: 3,
      name: 'Louvre Museum',
      location: 'Paris, France',
      raiting: 4.7,
      price: 65,
    },
    {
      id: 4,
      name: 'Louvre Museum',
      location: 'Paris, France',
      raiting: 4.7,
      price: 65,
    },
    {
      id: 5,
      name: 'Louvre Museum',
      location: 'Paris, France',
      raiting: 4.7,
      price: 65,
    },
    {
      id: 6,
      name: 'Louvre Museum',
      location: 'Paris, France',
      raiting: 4.7,
      price: 65,
    },
    {
      id: 7,
      name: 'Louvre Museum',
      location: 'Paris, France',
      raiting: 4.7,
      price: 65,
    },
    {
      id: 8,
      name: 'Louvre Museum',
      location: 'Paris, France',
      raiting: 4.7,
      price: 65,
    },
    {
      id: 9,
      name: 'Louvre Museum',
      location: 'Paris, France',
      raiting: 4.7,
      price: 65,
    },
    {
      id: 10,
      name: 'Louvre Museum',
      location: 'Paris, France',
      raiting: 4.7,
      price: 65,
    },
    {
      id: 11,
      name: 'Louvre Museum',
      location: 'Paris, France',
      raiting: 4.7,
      price: 65,
    },
    {
      id: 12,
      name: 'Louvre Museum',
      location: 'Paris, France',
      raiting: 4.7,
      price: 65,
    },
    {
      id: 13,
      name: 'Louvre Museum',
      location: 'Paris, France',
      raiting: 4.7,
      price: 65,
    },
    {
      id: 14,
      name: 'Louvre Museum',
      location: 'Paris, France',
      raiting: 4.7,
      price: 65,
    },
    {
      id: 15,
      name: 'Louvre Museum',
      location: 'Paris, France',
      raiting: 4.7,
      price: 65,
    },
    {
      id: 16,
      name: 'Louvre Museum',
      location: 'Paris, France',
      raiting: 4.7,
      price: 65,
    },
    {
      id: 17,
      name: 'Louvre Museum',
      location: 'Paris, France',
      raiting: 4.7,
      price: 65,
    },
    {
      id: 18,
      name: 'Louvre Museum',
      location: 'Paris, France',
      raiting: 4.7,
      price: 65,
    },
    {
      id: 19,
      name: 'Louvre Museum',
      location: 'Paris, France',
      raiting: 4.7,
      price: 65,
    },
    {
      id: 20,
      name: 'Louvre Museum',
      location: 'Paris, France',
      raiting: 4.7,
      price: 65,
    },
  ];

  return (
    <div className="home-page">
      <section className="home-page__filters">
        <div className="home-page__search-container">
          <Search />
          <button
            className="button button--yellow"
            type="button"
            onClick={() => {}}
          >
            Search
          </button>
        </div>
        <div className="home-page__tags">
          <Checkbox textLabel={Tags.All} typeBox='button'/>
          <Checkbox textLabel={Tags.Cities} typeBox='button'/>
          <Checkbox textLabel={Tags.Architecture} typeBox='button'/>
          <Checkbox textLabel={Tags.Seaside} typeBox='button'/>
          <Checkbox textLabel={Tags.Mountains} typeBox='button'/>
          <Checkbox textLabel={Tags.Extreme} typeBox='button'/>
        </div>
      </section>
      <section className="home-page__cards">
        <PlacesList places={places} />
      </section>
      <Pagination 
        quantity={150}
        perPage={20}
        quantityVisiblePages={3}
        page={page}
      />
    </div>
  );
};
