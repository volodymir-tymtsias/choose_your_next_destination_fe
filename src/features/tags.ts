/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Tags } from '../types/Tags';

type TagsState = {
  tags: Tags[];
};

const initialTags: TagsState = {
  tags: [Tags.All],
};

// the number of tags on Homepage
const numberOfTags = 5;

export const tagsSlice = createSlice({
  name: 'tags',
  initialState: initialTags,
  reducers: {
    addTags: (state, action: PayloadAction<Tags>) => {
      if (action.payload === Tags.All) {
        state.tags = [Tags.All];
      } else {
        const newTags = [
          ...state.tags.filter(tag => tag !== Tags.All), 
          action.payload
        ];

        state.tags = newTags.length === numberOfTags ? [Tags.All] : newTags;
      }
    },
    deleteTags: (state, action: PayloadAction<Tags>) => {
      const newTags = state.tags.filter(tag => tag !== action.payload);
      
      state.tags = newTags.length === 0 ? [Tags.All] : newTags;
    },
  },
});

export default tagsSlice.reducer;
export const { addTags, deleteTags } = tagsSlice.actions;
