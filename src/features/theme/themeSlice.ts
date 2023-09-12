import { createSlice } from '@reduxjs/toolkit';
import { ThemeConfClass } from '../../ThemeConfClass';
import { lightTheme, darkTheme } from '../../ThemeConf';

export interface IThemeState {
  theme: ThemeConfClass;
}

const initialState: IThemeState = {
  theme: window.matchMedia('(prefers-color-scheme: dark)')
    ? darkTheme
    : lightTheme,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setLight: (state) => {
      state.theme = { ...lightTheme };
    },
    setDark: (state) => {
      state.theme = { ...darkTheme };
    },
    invert: (state) => {
      state.theme.mode === 'light'
        ? (state.theme = { ...darkTheme })
        : (state.theme = { ...lightTheme });
    },
  },
});

export const { setLight, setDark, invert } = themeSlice.actions;
export default themeSlice.reducer;
