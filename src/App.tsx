import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Header } from './components/UI/Header/Header';
import type { RootState } from './store';
import { MenuList } from './components/smart/MenuList/MenuList';
import { AppWrapper } from './components/UI/AppWrapper/AppWrapper';
import {Outlet} from 'react-router-dom';

function App() {
  const theme = useSelector((state: RootState) => state.themeSwitcher.theme);
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Header />
        <MenuList />
        <Outlet/>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
