import React from 'react';
import { UIMeniList } from './UIMenuList';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { NavLink } from 'react-router-dom';
import { LinkWrapper } from '../../UI/LinksWrapper/LinkWrapper';

export const MenuList: React.FC = () => {
  const theme = useSelector((state: RootState) => state.themeSwitcher.theme);
  return (
    <UIMeniList $mode={theme.mode}>
      <LinkWrapper>
        <NavLink to="/">MAIN</NavLink>
        <NavLink to="/blog">BLOG</NavLink>
        <NavLink to="/">test3</NavLink>
        <NavLink to="/">test4</NavLink>
        <NavLink to="/">test5</NavLink>
      </LinkWrapper>
    </UIMeniList>
  );
};
