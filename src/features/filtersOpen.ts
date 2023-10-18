/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type FiltersIsOpenState = {
  filtersIsOpen: boolean;
};

const initialFiltersIsOpen: FiltersIsOpenState = {
  filtersIsOpen: false,
};

export const filtersIsOpenSlice = createSlice({
  name: 'filtersIsOpen',
  initialState: initialFiltersIsOpen,
  reducers: {
    setFiltersIsOpen: state => ({filtersIsOpen: !state.filtersIsOpen}),
  },
});

export default filtersIsOpenSlice.reducer;
export const { setFiltersIsOpen } = filtersIsOpenSlice.actions;
