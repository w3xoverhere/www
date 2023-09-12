import { ThemeConfClass } from './ThemeConfClass';

export const lightTheme = new ThemeConfClass(
  'light',
  {
    primary: '#dcdae3',
    secondary: '#e9e8ed',
    third: '#c9c9c9',
    error: '',
    warning: '',
  },
  '#f2f2f2'
);

export const darkTheme = new ThemeConfClass(
  'dark',
  {
    primary: '#383636',
    secondary: '#49494d',
    third: '#4a416e',
    error: '',
    warning: '',
  },
  '#212121'
);
