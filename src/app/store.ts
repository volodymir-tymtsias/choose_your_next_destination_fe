import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import lenguageReducer from '../features/language';
import filtersIsOpenReducer from '../features/filtersOpen';
import placesReducer from '../features/places';

export const store = configureStore({
  reducer: {
    lenguage: lenguageReducer,
    filtersIsOpen: filtersIsOpenReducer,
    places: placesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
