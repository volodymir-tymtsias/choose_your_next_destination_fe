import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import lenguageReducer from '../features/language';
import filtersIsOpenReducer from '../features/filtersOpen';
import tagsReducer from '../features/tags';

export const store = configureStore({
  reducer: {
    lenguage: lenguageReducer,
    filtersIsOpen: filtersIsOpenReducer,
    tags: tagsReducer,
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
