import React, { useState } from 'react';
import { UIThemeToggler } from './UIThemeToggler';
import { useDispatch, useSelector } from 'react-redux';
import { invert } from '../../../features/theme/themeSlice';
import { RootState } from '../../../store';
import { UICircleToggler } from './UICircleToggler';

export const ThemeToggler: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.themeSwitcher.theme);
  const [active, setActive] = useState(theme.mode === 'light' ? false : true);

  const clickHandler = () => {
    theme.mode === 'light' ? setActive(true) : setActive(false);
    dispatch(invert());
  };

  return (
    <div>
      <UIThemeToggler className="header-element" onClick={() => clickHandler()}>
        <UICircleToggler $active={active} />
      </UIThemeToggler>
    </div>
  );
};
