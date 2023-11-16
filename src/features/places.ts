/* eslint-disable no-param-reassign */
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Place } from '../types/Place';
import { getPlaces } from '../api/places';
import { Activities } from '../types/Activities';
import { Tags } from '../types/Tags';

type PlacesState = {
  places: Place[];
  loading: boolean;
  hasError: boolean;
  maxRange: number;
  minRange: number;
};

const places: Place[] = [
  {
    id: 1,
    name: 'Louvre MuseumTest Test Test',
    location: 'Paris, France Test Test Test',
    raiting: 4.7,
    price: 100,
    activities: [Activities.Sightseeing, Activities.Tours],
    tags: [Tags.Architecture, Tags.Cities],
  },
  {
    id: 2,
    name: 'Louvre Museum',
    location: 'Paris, France',
    raiting: 4.7,
    price: 65,
    activities: [Activities.Sightseeing, Activities.Nature],
    tags: [Tags.Architecture],
  },
  {
    id: 3,
    name: 'Louvre Museum',
    location: 'Paris, France',
    raiting: 4.7,
    price: 65,
    activities: [Activities.Sightseeing, Activities.Tours],
    tags: [Tags.Architecture],
  },
  {
    id: 4,
    name: 'Louvre Museum',
    location: 'Paris, France',
    raiting: 4.7,
    price: 65,
    activities: [Activities.Sightseeing, Activities.Tours],
    tags: [Tags.Architecture],
  },
  {
    id: 5,
    name: 'Louvre Museum',
    location: 'Paris, France',
    raiting: 4.7,
    price: 65,
    activities: [Activities.Sightseeing, Activities.Tours],
    tags: [Tags.Architecture],
  },
  {
    id: 6,
    name: 'Louvre Museum',
    location: 'Paris, France',
    raiting: 4.7,
    price: 65,
    activities: [Activities.Sightseeing, Activities.Tours],
    tags: [Tags.Architecture],
  },
  {
    id: 7,
    name: 'Louvre Museum',
    location: 'Paris, France',
    raiting: 4.7,
    price: 65,
    activities: [Activities.Sightseeing, Activities.Tours],
    tags: [Tags.Architecture],
  },
  {
    id: 8,
    name: 'Louvre Museum',
    location: 'Paris, France',
    raiting: 4.7,
    price: 65,
    activities: [Activities.Sightseeing, Activities.Tours],
    tags: [Tags.Architecture],
  },
  {
    id: 9,
    name: 'Louvre Museum',
    location: 'Paris, France',
    raiting: 4.7,
    price: 65,
    activities: [Activities.Sightseeing, Activities.Tours],
    tags: [Tags.Architecture],
  },
  {
    id: 10,
    name: 'Louvre Museum',
    location: 'Paris, France',
    raiting: 4.7,
    price: 65,
    activities: [Activities.Sightseeing, Activities.Tours],
    tags: [Tags.Architecture],
  },
  {
    id: 11,
    name: 'Louvre Museum',
    location: 'Paris, France',
    raiting: 4.7,
    price: 65,
    activities: [Activities.Sightseeing, Activities.Tours],
    tags: [Tags.Architecture],
  },
  {
    id: 12,
    name: 'Louvre Museum',
    location: 'Paris, France',
    raiting: 4.7,
    price: 65,
    activities: [Activities.Sightseeing, Activities.Tours],
    tags: [Tags.Architecture],
  },
  {
    id: 13,
    name: 'Louvre Museum',
    location: 'Paris, France',
    raiting: 4.7,
    price: 65,
    activities: [Activities.Sightseeing, Activities.Tours],
    tags: [Tags.Architecture],
  },
  {
    id: 14,
    name: 'Louvre Museum',
    location: 'Paris, France',
    raiting: 4.7,
    price: 65,
    activities: [Activities.Sightseeing, Activities.Tours],
    tags: [Tags.Architecture],
  },
  {
    id: 15,
    name: 'Louvre Museum',
    location: 'Paris, France',
    raiting: 4.7,
    price: 65,
    activities: [Activities.Sightseeing, Activities.Tours],
    tags: [Tags.Architecture],
  },
  {
    id: 16,
    name: 'Louvre Museum',
    location: 'Paris, France',
    raiting: 4.7,
    price: 65,
    activities: [Activities.Sightseeing, Activities.Tours],
    tags: [Tags.Architecture],
  },
  {
    id: 17,
    name: 'Louvre Museum',
    location: 'Paris, France',
    raiting: 4.7,
    price: 65,
    activities: [Activities.Sightseeing, Activities.Tours],
    tags: [Tags.Architecture],
  },
  {
    id: 18,
    name: 'Louvre Museum',
    location: 'Paris, France',
    raiting: 4.7,
    price: 65,
    activities: [Activities.Sightseeing, Activities.Tours],
    tags: [Tags.Architecture],
  },
  {
    id: 19,
    name: 'Louvre Museum',
    location: 'Paris, France',
    raiting: 4.7,
    price: 65,
    activities: [Activities.Sightseeing, Activities.Tours],
    tags: [Tags.Architecture],
  },
  {
    id: 20,
    name: 'Louvre Museum',
    location: 'Paris, France',
    raiting: 4.7,
    price: 65,
    activities: [Activities.Sightseeing, Activities.Tours],
    tags: [Tags.Architecture],
  },
  {
    id: 21,
    name: 'Louvre Museum',
    location: 'Paris, France',
    raiting: 4.5,
    price: 90,
    activities: [Activities.Sightseeing, Activities.Tours],
    tags: [Tags.Seaside],
  },
  {
    id: 22,
    name: 'Louvre Museum',
    location: 'Paris, France',
    raiting: 3.7,
    price: 35,
    activities: [Activities.Sightseeing, Activities.Tours],
    tags: [Tags.Extreme],
  },
  {
    id: 23,
    name: 'Louvre Museum',
    location: 'Paris, France',
    raiting: 2.5,
    price: 22,
    activities: [Activities.Sightseeing, Activities.Sport],
    tags: [Tags.Mountains, Tags.Extreme],
  },
];

const initialPlaces: PlacesState = {
  places: places,
  loading: false,
  hasError: false,
  maxRange: 100,
  minRange: 0,
};

export const initPlaces = createAsyncThunk(
  'places/fetch',
  () => getPlaces(),
);

export const placesSlice = createSlice({
  name: 'places',
  initialState: initialPlaces,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(initPlaces.pending, (state) => {
        state.hasError = false;
        state.loading = true;
      })
      .addCase(initPlaces.fulfilled, (state, action) => {
        state.loading = false;
        state.places = action.payload;
        state.maxRange = action.payload.reduce((prev, place) => {
          return place.price > prev ? place.price : prev;
        }, 0);
      })
      .addCase(initPlaces.rejected, (state) => {
        state.loading = false;
        state.hasError = true;
      });
  },
});

export default placesSlice.reducer;
export const {} = placesSlice.actions;
