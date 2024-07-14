import React from 'react';
import styles from './Contact.module.css';
import mapImage from '../images/map/map.png'; 
import mapsIcon from '../images/map/google-maps.png'; 

const Contact = () => {
  return (
    <section id="contact" className={styles.section}>
      <h2>Contact Us</h2>
      <div className={styles.mapContainer}>
        <img src={mapImage} alt="Map" className={styles.mapImage} />
        <a href="https://www.google.com/maps?q=Strada+Menumorut+35,+Oradea,+Romania" target="_blank" rel="noopener noreferrer" className={styles.mapIcon}>
          <img src={mapsIcon} alt="Google Maps" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
