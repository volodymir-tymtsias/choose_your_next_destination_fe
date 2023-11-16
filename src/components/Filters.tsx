import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { TextInput } from './TextInput';
import { PriceRange } from './PriceRange';
import { Activity } from './Activity';
import { Activities } from '../types/Activities';
import { useSearchParams } from 'react-router-dom';
import * as filtersOpenAction from '../features/filtersOpen';

import { getSearchWith } from '../helpers/searchHelper';

export const Filters: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { maxRange, minRange } = useAppSelector(state => state.places);
  // const { maxRange, minRange } = useAppSelector(state => state.priceRangeMinMax);
  const activities = searchParams.getAll('activities');
  const locale = searchParams.get('location');
  const dateParam = searchParams.get('date');
  const priceMinParam = searchParams.get('priceMin');
  const priceMaxParam = searchParams.get('priceMax');
  // const max = useMemo(() => {
  //   console.log('dsfds');
  //   return places.reduce((prev, place) => {
  //     return place.price > prev ? place.price : prev;
  //   }, 0);
  // }, [places]);
  // const maxRange = 100;
  const defaulMaxRange = Math.round(maxRange / 100 * 70);
  // const currentDate = new Date();
  // const currentDay = currentDate.getDate() > 9 
  //   ? currentDate.getDate() 
  //   : `0${currentDate.getDate()}`;
  // const formattedToday = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDay}`;
  const dispatch = useAppDispatch();
  const [currentLocation, setCurrentLocation] = useState(locale || '');
  const [date, setDate] = useState(dateParam || '');
  const [currentPriceMin, setCurrentPriceMin] = useState(priceMinParam ? +priceMinParam : minRange);
  const [currentPriceMax, setCurrentPriceMax] = useState(priceMaxParam ? +priceMaxParam : defaulMaxRange);
  const [currentActivities, setCurrentActivities] = useState(activities || []);

  const onLocationChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentLocation(event.target.value);
  }, []);

  const onDateChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  }, []);

  const handlerCloseButton = () => {
    dispatch(filtersOpenAction.setFiltersIsOpen());
  }

  const onActivitiesChange = useCallback((activity: Activities) => () => {
      setCurrentActivities(currentActivities => {
        if (currentActivities.includes(activity)) {
          return currentActivities.filter(item => item !== activity);
        }
        
        return [...currentActivities, activity];
      });
  }, []);

  const handlerApply = () => {
    setSearchParams(
      getSearchWith(searchParams, { 
        location: currentLocation || null,
        date: date || null,
        priceMin: currentPriceMin.toString(),
        priceMax: currentPriceMax.toString(),
        activities: currentActivities,
        page: '1',
      }),
    );
    dispatch(filtersOpenAction.setFiltersIsOpen());
  }

  const handlerReset = () => {
    setCurrentLocation('');
    setDate('');
    setCurrentPriceMin(0);
    setCurrentPriceMax(defaulMaxRange);
    setCurrentActivities([]);
  }

  return (
    <div className="filters">
      <div className="filters__container">
        <div className="filters__title-container">
          <h2 className="filters__title">Filter by</h2>
          <span className="filters__button">
            <button
              type="button"
              className="button button--close"
              onClick={handlerCloseButton}
            >
              <span className="icon icon--mask icon--close"></span>
            </button>
          </span>
        </div>
        <div className="filters__content">
          <TextInput
            name='location'
            type='text'
            label='Location'
            placeholder='Enter country, city, etc.'
            value={currentLocation}
            setValue={onLocationChange}
          />
          <TextInput
            name='date'
            type='date'
            label='Set the date'
            value={date}
            setValue={onDateChange}
          />
          <PriceRange 
            maxValue={maxRange}
            minValue={minRange}
            currentMin={currentPriceMin}
            currentMax={currentPriceMax}
            setCurrentPriceMin={setCurrentPriceMin}
            setCurrentPriceMax={setCurrentPriceMax}
          />

          <div className="filters__activities">
            <p className="filters__activities-title">Activities</p>
            <div className="filters__activities-grid">
              <Activity 
                textLabel={Activities.Sightseeing} 
                onChange={onActivitiesChange}
                checked={currentActivities.includes(Activities.Sightseeing)}
              />
              <Activity 
                textLabel={Activities.Sport} 
                onChange={onActivitiesChange}
                checked={currentActivities.includes(Activities.Sport)}
              />
              <Activity 
                textLabel={Activities.Nature} 
                onChange={onActivitiesChange}
                checked={currentActivities.includes(Activities.Nature)}
              />
              <Activity 
                textLabel={Activities.Tours} 
                onChange={onActivitiesChange}
                checked={currentActivities.includes(Activities.Tours)}
              />
            </div>
          </div>
          <div className="filters__buttons">
            <button
              type="button"
              className="button button--yellow-border"
              onClick={handlerReset}
            >
              Reset
            </button>
            
            <button
              type="button"
              className="button button--yellow"
              onClick={handlerApply}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
