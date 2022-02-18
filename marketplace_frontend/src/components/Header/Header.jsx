import React from 'react';
import { NavBar } from '../NavBar/NavBar';
import style from './Header.module.css';

export const Header = () => {
  return (
    <header className={style.header}><NavBar /></header>
  );
}
