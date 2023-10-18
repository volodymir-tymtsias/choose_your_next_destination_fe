import React from 'react';
import { Place } from '../types/Place';
import { PlaceCard } from './PlaceCard';

type Props = {
  places: Place[],
};

const getGridClasses = (index: number) => {
  const numberInRow = 5;
  const row = Math.ceil((index + 1) / numberInRow);
  const odd = row % 2 !== 0;
  const indexInRow = index - ((row - 1) * numberInRow);
  if (odd && Number.isInteger(index / numberInRow)) {
    return `${indexInRow + 1}-${indexInRow + 1}`;
  }

  if (odd && Number.isInteger((index - 1) / numberInRow)) {
    return `${indexInRow + 1}-${indexInRow + 2}`;
  }

  if (odd) {
    return `${indexInRow + 2}-${indexInRow + 2}`;
  }

  if (!odd && ((index + 2) / numberInRow === row)) {
    return `${indexInRow + 1}-${indexInRow + 2}`;
  }

  if (!odd && ((index + 1) / numberInRow === row)) {
    return `${indexInRow + 2}-${indexInRow + 2}`;
  }

  if (!odd) {
    return `${indexInRow + 1}-${indexInRow + 1}`;
  }
}

export const PlacesList: React.FC<Props> = ({ places }) => {
  return (
    <ul className="places-list grid">
      {
        places.map((place, i) => (
          <li className={`places-list__item places-list__item--${getGridClasses(i)}`} key={place.id}>
            <PlaceCard place={place} />
          </li>
        ))
      }
    </ul>
  );
};
