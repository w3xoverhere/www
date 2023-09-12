import React from 'react';
import { UIHeader } from './UIHeader';
import { ThemeToggler } from '../../smart/ThemeToggler/ThemeToggler';

export const Header: React.FC = () => {
  return (
    <UIHeader>
      <div className="header-element">test</div>
      <ThemeToggler />
    </UIHeader>
  );
};
