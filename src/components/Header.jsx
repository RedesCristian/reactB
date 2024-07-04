import React from 'react';
import styles from './Header.module.css';
import logo from '../images/logo (1).png';
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoImage}>
        <img src={logo} alt="Company logo" width="135px" height="auto"></img>
        {/* <h1 className={styles.title}>Barbershop</h1> */}
      </div>
      <nav className={styles.nav}>
        <a href="#services">Servicii</a>
        <a href="#about">Poveste</a>
        <a href="#team">Echipa</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
