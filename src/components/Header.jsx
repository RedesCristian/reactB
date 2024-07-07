import React from 'react';
import styles from './Header.module.css';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${styles.navLeft}`}>
        <a href="#services">Servicii</a>
        <a href="#about">Poveste</a>
      </nav>
      <div className={styles.logoImage}>
        <img src={logo} alt="Company logo" width="185px" height="auto" />
      </div>
      <nav className={`${styles.nav} ${styles.navRight}`}>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
