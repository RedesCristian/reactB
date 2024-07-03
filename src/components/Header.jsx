import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Barbershop</h1>
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
