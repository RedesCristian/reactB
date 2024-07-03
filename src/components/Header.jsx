import React from "react";
import styles from "./Header.module.css";
import logo from "../images/logo/logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Barbershop Logo" className={styles.logo} /> 
      <nav className={styles.nav}>
        <a href="#services">Servicii</a>
        <a href="#about">Poveste</a>
        <a href="#team">Echipa</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
