import React from 'react';
import styles from './Header.module.css';
import logo from '../images/logo (1).png';
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoImage}>
        <img src={logo} alt="Company logo" width="50px" height="65px"></img>
        <h1 className={styles.title}>Barbershop</h1>
      </div>
      <nav className={styles.nav}>
        <a href="#services">Services</a>
        <a href="#about">About Us</a>
        <a href="#team">Our Team</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
