/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Language } from '../types/Language';

type LanguageState = {
  language: Language | null;
};

const initialLanguage: LanguageState = {
  language: Language.EN,
};

export const languageSlice = createSlice({
  name: 'language',
  initialState: initialLanguage,
  reducers: {
    setLanguage: (language, action: PayloadAction<Language>) => {
      language.language = action.payload;
    },
  },
});

export default languageSlice.reducer;
export const { setLanguage } = languageSlice.actions;
